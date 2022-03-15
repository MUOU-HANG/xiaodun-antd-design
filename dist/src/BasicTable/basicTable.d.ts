import { PaginationProps, TableProps } from 'antd';
import React from 'react';
interface QueryParams {
    method: 'POST' | 'GET';
    url: RequestInfo;
    params: object;
    headers: HeadersInit;
}
interface BasicTableProps extends TableProps<object> {
    url?: RequestInfo;
    queryParams: QueryParams;
    firstRun?: boolean;
    format?: string | (() => {
        list: [];
        total: number;
    });
    onPageChange: (values: PaginationProps) => void;
}
declare const _default: React.NamedExoticComponent<BasicTableProps>;
export default _default;
