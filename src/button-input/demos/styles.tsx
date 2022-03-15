import { Button } from 'antd';
import React, { FC, memo } from 'react';
import { ButtonInput } from 'xdad';
import styles from './index.less';

const StyleDemo:FC = () => {
  return (
    <>
      <ButtonInput height={30} style={{marginLeft:30}} />
      <ButtonInput
        className={styles.button}
        block={true}
        width={200}
        replace={<Button size="small" type='primary'>新增</Button>}
      />
    </>
  );
};


export default memo(StyleDemo);
