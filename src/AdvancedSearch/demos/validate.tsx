import { Input } from 'antd';
import React, { FC, memo } from 'react';
import { AdvancedSearch } from 'xdad';
const Validate:FC = () => {
  return (
    <AdvancedSearch >
      <Input  data-itemprops={{
        name:'validate',
        rules: [{ required: true, message: 'validate test' }]
      }} />
      <Input  data-itemprops={{
        name:'validate2',
        rules: [{ required: true, message: 'validate test' }]
      }} />
      <Input  data-simple data-itemprops={{
        name: 'validate3',
        rules: [{ required: true, message: 'validate test' }]
      }} />
    </AdvancedSearch>
  );
};


export default memo(Validate);
