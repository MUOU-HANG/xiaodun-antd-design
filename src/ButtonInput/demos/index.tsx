import React, { FC } from 'react';
import {ButtonInput} from 'xdad';
import {Tag} from 'antd';

const Index:FC = () => {
  return <ButtonInput
    width={'200px'}
    text="测试"
    onChange={(value) =>console.log(value)}
    onKeyEnter={(value) => console.log(value)}
    replace={<Tag closable>233</Tag>}
  />;
};

export default Index;
