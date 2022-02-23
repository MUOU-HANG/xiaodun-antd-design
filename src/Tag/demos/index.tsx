import React, { memo } from 'react';
import { Tag } from 'xdad';
const TDTag = () => {
  return (
    <>
      <Tag>默认</Tag> &nbsp; &nbsp;
      <Tag color={'#DE31CA'}>自定义颜色</Tag>&nbsp; &nbsp;
      <Tag point={false} color={'#DE31CA'}>无圆点模式</Tag>&nbsp; &nbsp;
      <Tag card >卡片模式</Tag>&nbsp; &nbsp;
      <Tag text={'Text 传参'} />
    </>
  );
};

export default memo(TDTag);
