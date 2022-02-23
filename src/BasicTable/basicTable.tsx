import { PaginationProps, Table, TableProps,  } from 'antd';
import React, { FC, memo, useEffect, useState } from 'react';

interface QueryParams {
  method: 'POST' | 'GET',
  url: RequestInfo,
  params: object,
  headers:HeadersInit
}

interface BasicTableProps extends TableProps<object>{
  url?: RequestInfo,
  queryParams: QueryParams;
  firstRun?: boolean;
  format?: string | (() => { list: [], total: number }),
  onPageChange:(values:PaginationProps)=>void
}

const BasicTable: FC<BasicTableProps> = ({
  columns = [],
  dataSource = null,
  firstRun = true,
  url,
  queryParams = {},
  format = false,
  pagination,
  onPageChange,
  ...rest
}) => {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1); // 当前页
  const [pageSize, setPageSize] = useState(10);
  const [dataSourceInner, setDataSourceInner] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTaleData = () => {
    // 如果url或queryParams.url不为空，则请求数据为内部请求
    const {params={},headers={},method='GET',url:queryURL} = queryParams;
    const init:RequestInit = {
      method,
      headers,
      body:JSON.stringify(params)
    };
    const ISPOST = method.toUpperCase() === 'POST';
    (url || queryURL)&&fetch(url || queryURL||'', ISPOST?init:undefined).then(async res => {
      const resData = await res.clone().json();
      if (format && typeof format === 'function') {
        setDataSourceInner(format().list||[]);
        setTotal(format()?.total);
      }
      if (format&&typeof format === 'string') {
        setDataSourceInner(resData[format].list || []);
        setTotal(resData[format]?.total);

      }
      if (!format) {
        setDataSourceInner(resData?.data?.list || []);
        setTotal(resData?.data?.total);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    firstRun && getTaleData();
  }, [current, pageSize]);

  const onInternalPageChange = ({...values}) => {
    onPageChange?.(values);
    console.log(values);

  };

  return(
    <Table
      {...rest}
      loading={loading}
      columns={columns}
      pagination={pagination||{
        total,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize,
        onChange:(current, pageSize,...rest )=>{
          setCurrent(current);
          setPageSize(pageSize);
          onInternalPageChange({ current, pageSize, rest });
        }
      }}
      dataSource={dataSource??dataSourceInner}
    />
  );
};


export default memo(BasicTable);
