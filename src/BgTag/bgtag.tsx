/**
 * 自定义标签，用法与antd的Tag标签相同
 * @param color 传入的参数为颜色（必须为十六进制数）
 * @param card 是否在card模式
 * @returns
 */
import React, { FC } from 'react';
import './index.less';
/* 转换颜色 */
const changeHexToRgba = (str: string, alpha: number) => {
  const REGCOLOR = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  const ISRGBA = REGCOLOR.test(str);
  if (ISRGBA === false) {
    throw Error(`输入的${str}值错误，请输入正确的16进制颜色值`);
  }
  // 去掉#号
  const colorStr = str.slice(1);
  const len = colorStr.length;
  if (len === 3) {
    const color = colorStr
      .split('')
      .map((ele) => parseInt(`0x${ele.repeat(2)}`))
      .join(',');
    return `rgba(${color},${alpha})`;
  }
  const regMatch = colorStr.match(/[A-z0-9]{2}/g) ?? [];
  const color = regMatch.map((ele) => parseInt(`0x${ele}`));
  if (len === 6) {
    return `rgba(${color.join(',')},${alpha})`;
  }
  if (len === 8) {
    const opacityValue = color.pop() ?? 0;
    const opacity = (opacityValue / 255).toFixed(2);
    return `rgba(${color.slice(0, 3).join(',')}, ${opacity})`;
  }
};
interface TagProps {
  color?: string;
  card?: boolean;
  point?: boolean;
  text?: string,
  style?: any,
  className?: any,
}
const Tag: FC<TagProps> = ({ color = '#000', card = false, point = true, children, text = '默认', className,style}) => {

  return (
    <span
      className={[card ? 'xdad-tag-card' : 'xdad-tag',className].join(' ')}
      style={{ backgroundColor: changeHexToRgba(color, 0.1),...style}}
    >
      {point && (
        <span
          className={'xdad-tag-point'}
          style={{ backgroundColor: changeHexToRgba(color, 1) }}
        />
      )}

      <span
        className={card ? 'xdad-tag-card-text' : 'xdad-tag-text'}
        style={{ color: `${color}`, fontWeight: 200 }}
      >
        {children ?? text}
      </span>
    </span>
  );
};
export default Tag;
