import { DatePicker, Input, Select } from 'antd';
import React from 'react';
import { AdvancedSearch } from 'xdad';


const Index = () => {
  const { QuickForm, AdvancedForm } = AdvancedSearch;
  const handleChange = (current, allValues, quickValues, advancedValues) => {
    console.log(current, allValues, quickValues, advancedValues);

  };

  const handleKeyEnter = (current, allValues, quickValues, advancedValues) => {
    console.log(current, allValues, quickValues, advancedValues);
  };

  return (
    <>
      <AdvancedSearch
        onSearch={(a, b, c) => {
          console.log('search:', a, b, c);
        }}
      >
        <QuickForm
          onKeyEnter={handleKeyEnter}
          onChange={handleChange}
        >
          <DatePicker data-name="quick1" style={{ width: '100%' }} />
          <Input data-itemprops={{ name: 'quick2', }} />
          <Select data-name="quick3" />
        </QuickForm>
        <AdvancedForm initialValues={{ name: '1234' }}>
          <DatePicker data-name="advanced1" style={{ width: '100%' }} />
          <Input data-itemprops={{ name: 'advanced2', }} />
          <Select data-name="advanced3" />
        </AdvancedForm>
        <DatePicker data-name="quick-simple" data-simple style={{ width: '100%' }} />
        <Select data-name="advanced" />
      </AdvancedSearch>
    </>
  );
};

export default Index;
