import { Button, Input } from 'antd';
import React, { FC, memo } from 'react';

import {AdvancedSearch} from 'xdad';

const Toolbar: FC = () => {
  const { ToolBar,QuickForm } = AdvancedSearch;
  return (
    <>
      <h2>data-toolbar方式</h2>
      <AdvancedSearch>
        <Button data-toolbar>全选</Button>
        <Button data-toolbar>反选</Button>
        <QuickForm>
          <Input />
        </QuickForm>
      </AdvancedSearch>
      <h2>ToolBar方式</h2>
      <AdvancedSearch>
        <ToolBar>
          <Button>全选</Button>
          <Button>反选</Button>
        </ToolBar>
        <QuickForm>
          <Input />
        </QuickForm>
      </AdvancedSearch>
    </>
  );
};


export default memo(Toolbar);
