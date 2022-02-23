import React, { memo } from 'react';
import { BgTag } from 'xdad';
const TDTag = () => {
  return (
    <>
      <BgTag style={{marginLeft:100}}>默认</BgTag> &nbsp; &nbsp;
      <BgTag color={'#DE31CA'}>自定义颜色</BgTag>&nbsp; &nbsp;
      <BgTag point={false} color={'#DE31CA'}>无圆点模式</BgTag>&nbsp; &nbsp;
      <BgTag card >卡片模式</BgTag>&nbsp; &nbsp;
      <BgTag text={'Text 传参'} />
    </>
  );
};

export default memo(TDTag);
