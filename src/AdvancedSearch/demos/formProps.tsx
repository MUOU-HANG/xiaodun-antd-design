import { Input } from 'antd';
import React, { FC, memo } from 'react';
import { AdvancedSearch} from 'xdad';
const { AdvancedForm } = AdvancedSearch;

const FormProps:FC = () => {
  return (
    <AdvancedSearch
      formProps={{
        initialValues:{input:123}
      }}>
      <Input data-name="input" />
      <AdvancedForm initialValues={{input2:456}}>
        <Input data-name="input2" />
      </AdvancedForm>
    </AdvancedSearch>
  );
};


export default memo(FormProps);
