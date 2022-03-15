/**
 * 自定义标签，用法与antd的Tag标签相同
 * @param color 传入的参数为颜色（必须为十六进制数）
 * @param card 是否在card模式
 * @returns
 */
import { FC } from 'react';
import './index.less';
interface TagProps {
    color?: string;
    card?: boolean;
    point?: boolean;
    text?: string;
    style?: any;
    className?: any;
}
declare const Tag: FC<TagProps>;
export default Tag;
