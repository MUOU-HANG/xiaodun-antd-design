import React, { FC } from 'react';
import {ButtonInput} from 'xdad';

const Index:FC = () => {
  return <ButtonInput
    width={'200px'}
    text="测试"
    onChange={(value) =>console.log(value)}
    onKeyEnter={(value) => console.log(value)}
  />;
};

export default Index;
