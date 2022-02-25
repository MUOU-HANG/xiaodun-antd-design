import { Button, Radio } from 'antd';
import React, { FC, memo } from 'react';
import {AdvancedSearch} from 'xdad';
const GroupSearch:FC = () => {
  return (
    <AdvancedSearch
      formProps={{
        initialValues:{group:'1'}
      }}
      onSearch={values => console.log(values)}
    >
      <Radio.Group
        data-width={300}
        data-itemprops={{
          name: 'group',
        }}>
        <Radio value="1">单选项1</Radio>
        <Radio value="2">单选项2</Radio>
        <Radio value="3">单选项3</Radio>
      </Radio.Group>
      <Button.Group>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Button.Group>
    </AdvancedSearch>
  );
};


export default memo(GroupSearch);
