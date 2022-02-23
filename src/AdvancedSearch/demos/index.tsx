import { DatePicker, Input, Select } from 'antd';
import React, { memo } from 'react';
import { AdvancedSearch } from 'xdad';

declare module 'react' {
  interface HTMLProps<T> {
     simple?:boolean;
 }
}

const Index = () => {
  const { reset } = AdvancedSearch;

  return (
    <>
      <AdvancedSearch
        formProps={{
          initialValues:{name:'张三'}
        }}
        // filterEmpty={false}
        // showAdvanced={false}
        onKeyEnter={(a,b,c,d) => {
          console.log(a,b,c,d);
        }}
        onSearch={(a,b,c) => {
          console.log(a,b,c);
        }}

        onChange={(a,b,c,d) => {
          console.log(a,b,c,d);
        }}
      >
        <Input data-name="name" placeholder='请输入姓名' />
        <Input data-name="test2" />
        <Select data-name="test3"  />
        <DatePicker data-name="test4" style={{width:'100%'}} />
        <Select data-name="test5" />
        <DatePicker data-name="test6" style={{ width: '100%' }} />
        <Input data-name="testa" data-simple />
        <Select data-name="testr" data-simple />
        <Select data-name="testy" data-simple />
        <DatePicker data-name="testc" style={{width:'100%'}} data-simple/>
      </AdvancedSearch>
    </>
  );
};

export default memo(Index);
