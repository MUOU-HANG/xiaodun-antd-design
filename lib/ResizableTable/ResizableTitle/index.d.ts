import { FC } from 'react';
interface ResizableTitleProps {
    onResize: () => void;
    width: number;
    [x: string]: string | number | (() => void);
}
declare const ResizableTitle: FC<ResizableTitleProps>;
export default ResizableTitle;
