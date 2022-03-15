import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

const MAX_SECOND_NUM = 60;

interface CountdownButtonType extends Omit<ButtonProps, 'disabled' | 'onClick'> {
  maxSecondNum?: number;
  txt?: string;
  loadingTxt?: string;
  disabledTxt?: (s: number) => string;
  onClick: (completeCallback: () => void) => void;
}
const CountdownButton=({
  maxSecondNum = MAX_SECOND_NUM,
  txt = '获取验证码',
  loadingTxt = '发送中',
  disabledTxt = (s) => `${s} 秒后重试`,
  onClick = (completeCallback) => {
    completeCallback();
  },
  ...rest
}: CountdownButtonType)=> {
  const [authCodeArgs, setAuthCodeArgs] = useState({
    timing: false,
    count: maxSecondNum,
  });
  useEffect(() => {
    let timer: number | undefined = undefined;
    if (authCodeArgs.timing) {
      timer = window.setInterval(() => {
        setAuthCodeArgs((pre) => {
          const { count, timing } = pre;
          if (count === 1) {
            window.clearInterval(timer);
            return { timing: false, count: maxSecondNum };
          }
          return { timing, count: count - 1 };
        });
      }, 1000);
    }
    return () => window.clearInterval(timer);
  }, [authCodeArgs.timing]);

  const completeCallback = () => {
    setAuthCodeArgs({
      ...authCodeArgs,
      timing: true,
    });
  };

  let buttonText;
  if (rest.loading) {
    buttonText = loadingTxt;
  } else if (authCodeArgs.timing) {
    buttonText = disabledTxt(authCodeArgs.count);
  } else {
    buttonText = txt;
  }

  return (
    <Button
      disabled={authCodeArgs.timing}
      style={{ minWidth: 100, ...(rest.style || {}) }}
      onClick={() => {
        onClick && onClick(completeCallback);
      }}
      {...rest}
    >
      {buttonText}
    </Button>
  );
};

export default CountdownButton;
