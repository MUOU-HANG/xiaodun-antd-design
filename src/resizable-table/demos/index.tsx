import React, { FC, memo } from 'react';
import { ResizableTable } from 'xdad';

const TDResizableTable: FC = () => {

  const dataSource = [
    { username: '张三', age: 28, address: '浙江杭州' },
    { username: '李四', age: 38, address: '山东菏泽' },
    { username: '王五', age: 25, address: '北京' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'username', width: 200, fixed: 'left' },
    { title: '年龄', dataIndex: 'age', width: 800 },
    { title: '地址', dataIndex: 'address', width: 800 },
    { title: '地址2', dataIndex: 'address2', width: 800 },
    { title: '地址3', dataIndex: 'address3', width: 800 },
    { title: '地址4', dataIndex: 'address4', width: 200, fixed: 'right' },
  ];

  return (
    <ResizableTable
      rowKey="username"
      dataSource={dataSource}
      pagination={{
        showQuickJumper: true,
      }}
      scroll={{ x: 1400 }}
      columns={columns} />
  );
};


export default memo(TDResizableTable);
