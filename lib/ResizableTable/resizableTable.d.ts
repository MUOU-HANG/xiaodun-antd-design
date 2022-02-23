import { TableProps } from 'antd';
import { FC } from 'react';
interface ResizableTableProps extends TableProps<any> {
    total: number;
    dataSource: readonly object[] | undefined;
}
declare const TdResizableTable: FC<ResizableTableProps>;
export default TdResizableTable;
