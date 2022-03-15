import React, { FC, memo } from 'react';
import {BasicTable} from 'xdad';

const Index: FC = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '7',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '8',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  // const columns = [
  //   {
  //     title: '性别',
  //     dataIndex: 'gender',
  //     key: 'gender',
  //   },
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: '住址',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  // ];

  /***
   * results: 10
page: 1
pagination[current]: 1
pagination[pageSize]: 10
   */

  const query = {
    url: 'https://randomuser.me/api?results=10',
    body: {
      results: 10,
      page: 1,
      'pagination[current]': 1,
      'pagination[pageSize]': 10
    }
  };

  const handleFormat = () => {
    return {list:[{nae:23}],total:100};
  };
  return (
    <div>
      <BasicTable
        columns={columns}
        // rowKey={'email'}
        // dataSource={dataSource}
        onPageChange={(values)=>console.log(values)}
        queryParams={query}
        // pagination={{total:1000}}
        // format={'results'}
      />
    </div>);
};


export default memo(Index);
