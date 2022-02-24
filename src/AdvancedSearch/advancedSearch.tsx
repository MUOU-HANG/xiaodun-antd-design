import { Button, Form, FormProps, message } from 'antd';
import React, { FC, JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import './index.less';

type Values = object;

interface AdvancedSearchProps {
  formProps?: FormProps
  children?: ReactElement[],
  showAdvanced?: boolean,
  filterEmpty?: boolean,
  reset?: () => void,
  onKeyEnter: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
  onChange: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
  onSearch?: (allValues: Values, simpleValues: Values, advancedValues: Values) => void;
}
type SearchType = ReactElement<any, string | JSXElementConstructor<unknown>>[];

export const reset = () => {
  document.getElementById('xdad-advanced-reset')?.click();
};

const AdvancedSearch: FC<AdvancedSearchProps> = ({ children, formProps, showAdvanced = true, filterEmpty = true, onKeyEnter, onChange, onSearch }) => {

  const [advancedForm] = Form.useForm();
  const [simpleForm] = Form.useForm();
  const [isAdvance, setIsAdvance] = useState(false);
  const [simpleSearch, setSimpleSearch] = useState<SearchType>([]);
  const [advancedSearch, setAdvancedSearch] = useState<SearchType>([]);

  useEffect(() => {
    classifySearch();
  }, []);

  // 搜索分类
  const classifySearch = () => {
    const _simpleSearch: SearchType = [];
    const _advancedSearch: SearchType = [];
    children?.forEach((child) => {
      child.props['data-simple']
        ? _simpleSearch.push(child)
        : _advancedSearch.push(child);
    });
    if (_simpleSearch.length > 4) {
      message.info('建议快捷搜索控制在4个以内！');
    }
    setAdvancedSearch(_advancedSearch);
    setSimpleSearch(_simpleSearch);
  };

  // 过滤空值 undefined|null
  const filterEmptyData = (SourceData: Values) => {
    for (const [key, value] of Object.entries(SourceData)) {
      if (!value) {
        delete SourceData[key];
      }
    }
    return SourceData;
  };

  // 合并搜索条件
  const mergeSearchValues = (_filterEmpty: boolean) => {
    const allValues: object = {
      ...simpleForm.getFieldsValue(),
      ...advancedForm.getFieldsValue()
    };
    console.log(allValues, '1234');

    return _filterEmpty ? filterEmptyData(allValues) : allValues;
  };

  // 搜索渲染
  const searchRender = (type: 'advanced' | 'simple') => {
    const renderData = type === 'advanced' ? advancedSearch : simpleSearch;
    return renderData?.map((child, index) => {
      const type: any = child.type;
      const name = child.props['data-name'];
      const itemProps = child.props['data-itemProps'];
      const isSelect = typeof type === 'object' && type?.render.name === 'InternalSelect';
      console.log(isSelect);

      return (
        <Form.Item
          key={name ?? index}
          name={name}
          {...itemProps}
          style={{ width: isSelect ? '160px' : '240px' }}
          className="xdad-advance-form-item"
        >
          {child}
        </Form.Item>
      );
    });
  };

  // 高级搜索
  const onInternalSearch = () => {
    const allValues = mergeSearchValues(filterEmpty);
    const simpleValues = filterEmpty ? filterEmptyData(simpleForm.getFieldsValue()) : simpleForm.getFieldsValue();
    const advancedValues = filterEmpty ? filterEmptyData(advancedForm.getFieldsValue()) : advancedForm.getFieldsValue();
    onSearch?.(simpleValues, advancedValues, allValues);
  };

  // 实时搜索
  const onInternalChange = (changedValues: object) => {
    const allValues = mergeSearchValues(filterEmpty);
    const simpleValues = filterEmpty ? filterEmptyData(simpleForm.getFieldsValue()) : simpleForm.getFieldsValue();
    const advancedValues = filterEmpty ? filterEmptyData(advancedForm.getFieldsValue()) : advancedForm.getFieldsValue();
    onChange?.(changedValues, allValues, simpleValues, advancedValues);
  };

  // 回车搜索
  const onInternalKeyEnter = (e: any) => {
    const allValues = mergeSearchValues(filterEmpty);
    const simpleValues = filterEmpty ? filterEmptyData(simpleForm.getFieldsValue()) : simpleForm.getFieldsValue();
    const advancedValues = filterEmpty ? filterEmptyData(advancedForm.getFieldsValue()) : advancedForm.getFieldsValue();
    const currentValues = {};
    const key = Object.keys(simpleValues).filter(key => key === e.target?.dataset?.name)[0];
    currentValues[key] = simpleValues[key];
    if (e.keyCode === 13) {
      onKeyEnter(currentValues, allValues, simpleValues, advancedValues);
    }
  };

  return (
    <div className={'xdad-advance clearfix'}>
      <div className="xdad-advance-seach"
        onKeyDown={onInternalKeyEnter}>
        <Form
          layout="inline"
          form={simpleForm}
          onValuesChange={onInternalChange}>
          {searchRender('simple')}
        </Form>
        {showAdvanced &&
          <div
            className={'xdad-advance-btn'}
            onClick={() => setIsAdvance(!isAdvance)}>
          高级搜索
            {isAdvance ?
              <i className="iconfont icon-advancedsearch" style={{ fontSize: '14px', marginLeft: '10px', display: 'inline-block' }} />
              : <i className="iconfont icon-advancedsearch" style={{ fontSize: '14px', marginLeft: '10px', transform: 'rotate(180deg)', display: 'inline-block' }} />}
          </div>}
      </div>
      {isAdvance && showAdvanced &&
        <Form
          form={advancedForm}
          {...formProps}
          layout={'inline'}
          className="xdad-advance-form">
          {searchRender('advanced')}
          <span className="xdad-advance-form-btns">
            <Button onClick={onInternalSearch}>查询</Button>
            <Button id="xdad-advanced-reset" style={{ marginLeft: 10 }} onClick={() => advancedForm.resetFields()}>重置</Button>
          </span>
        </Form>}
    </div>
  );
};

export default AdvancedSearch;
