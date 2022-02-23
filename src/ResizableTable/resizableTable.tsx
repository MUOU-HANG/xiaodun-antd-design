
import { ConfigProvider, Table, TableProps } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import ResizableTitle from './ResizableTitle';
import zhCN from 'antd/lib/locale/zh_CN';
import { PaginationProps } from 'antd/lib/pagination';
import { ColumnsType, ColumnType } from 'antd/lib/table';

interface ResizableTableProps extends TableProps<any> {
  total: number,
  dataSource: readonly object[] | undefined,
}

const TdResizableTable: FC<ResizableTableProps> = ({
  dataSource = [],
  columns = [],
  total = 0,
  pagination,
  ...rest
}) => {
  const [columnsInner, setColumnsInner] = useState<ColumnsType>(columns);
  const [paginationInner, setPaginationInner] = useState<PaginationProps>();

  const defaultPagination: PaginationProps = {
    total,
    showTotal: (total: number, range: number[]) => `第${range[0]}-${range[1]}页/共${total}条`
  };

  useEffect(() => {
    setPaginationInner({
      ...defaultPagination,
      ...pagination
    });
  }, [pagination]);

  // 更改列宽
  const handleResize = (index: number) => (_:object, { size }: { size: {width:number} }) => {
    setColumnsInner((columnsInner) => {
      const nextColumns = [...columnsInner];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return nextColumns;
    });
  };

  // 重写columns,使得实时更新列宽
  const _columns = columnsInner.map((col, index) => ({
    ...col,
    onHeaderCell: (column:ColumnType<object>) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  return (
    <ConfigProvider locale={zhCN}>
      <Table
        style={{ margin: 10, padding: 10 }}
        {...rest}
        columns={_columns}
        dataSource={dataSource}
        pagination={paginationInner}
        components={{
          header: {
            cell: ResizableTitle,
          },
        }}
      />
    </ConfigProvider>
  );
};

export default TdResizableTable;
