import { Input } from 'antd';
import React, { FC, memo } from 'react';
import { AdvancedSearch} from 'xdad';
const { QuickForm,AdvancedForm } = AdvancedSearch;
const SimpleSearch:FC = () => {
  return (
    <>
      <h2>通过simple方式</h2>
      <AdvancedSearch
        onSearch={(value) => {
          console.log(value);
        }} >
        <Input placeholder="快捷搜索示例" data-simple data-name="simple" />
      </AdvancedSearch>
      <h2>通过QuickForm方式</h2>
      <AdvancedSearch
        onSearch={(value) => {
          console.log(value);
        }} >
        <QuickForm >
          <Input placeholder="快捷搜索示例" data-simple data-name="simple2" />
        </QuickForm>
      </AdvancedSearch>
    </>
  );
};


export default memo(SimpleSearch);
