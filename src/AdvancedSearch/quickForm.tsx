import { Form } from 'antd';
import React, { FC, useContext, useEffect } from 'react';
import { AdvancedContext } from './advancedSearch';
import { filterEmptyData } from './utils';

type Values = object

export interface QuickFromProps {
  filterEmpty?: boolean,
  style?: any,
  className?:any,
  onChange?: (current:Values,allValues:Values,quickValues:Values,advancedValues:Values) => void,
  onKeyEnter?: (current:Values,allValues:Values,quickValues:Values,advancedValues:Values) => void
}

const QuickForm: FC<QuickFromProps> = ({ children, onChange,filterEmpty, onKeyEnter,...rest }) => {
  const {setAllValues,allValues,advancedValues,setQuickValues} = useContext(AdvancedContext);
  const [form] = Form.useForm();

  useEffect(() => {
    setQuickValues(form.getFieldsValue());
  },[]);

  // 实时搜索
  const onInternalChange = (current: object) => {
    const _allValues = { ...allValues, ...form.getFieldsValue() };
    const values = form.getFieldsValue();
    setAllValues(_allValues);
    setQuickValues(values);
    onChange?.(
      current,
      filterEmpty ? filterEmptyData(_allValues):_allValues,
      filterEmpty ? filterEmptyData(values):values,
      filterEmpty ? filterEmptyData(advancedValues) : advancedValues
    );
  };

  // 回车搜索
  const onInternalKeyEnter = (e: any) => {
    const _allValues = { ...allValues, ...form.getFieldsValue() };
    const values = form.getFieldsValue();
    const currentValues = {};
    const key = Object.keys(values).filter(key => key === e.target?.dataset?.name)[0];
    currentValues[key] = values[key];
    if (!key) {
      currentValues[e.target?.dataset?.name] = '';
      delete currentValues['undefined'];
    }
    if (e.keyCode === 13) {
      setAllValues(_allValues);
      setQuickValues(values);
      form.validateFields().then(() => {
        onKeyEnter?.(
          currentValues,
          filterEmpty ? filterEmptyData(_allValues):_allValues,
          filterEmpty ? filterEmptyData(values):values,
          filterEmpty ? filterEmptyData(advancedValues) : advancedValues
        );
      }).catch(err=>{console.log(err);
      });
    }
  };

  // 搜索渲染
  const searchRender = () => {
    const childs = Array.isArray(children) ? children : [children];
    return childs?.map((child, index) => {
      const type: any = child?.type;
      const name = child?.props['data-name'];
      const itemprops = child?.props['data-itemprops'];
      const isSelect = typeof type === 'object' && type?.render?.name === 'InternalSelect';
      const width = typeof child?.props['data-width'] === 'number' ? `${child?.props['data-width']}px` : child?.props['data-width'];

      return (
        <Form.Item
          key={name ?? index}
          name={name}
          {...itemprops}
          style={{ width: width ? width : (isSelect ? '160px' : '240px') }}
          className="xdad-advance-form-item"
        >
          {child}
        </Form.Item>
      );
    });
  };

  return (
    <Form
      layout="inline"
      form={form}
      {...rest}
      onKeyDown={onInternalKeyEnter}
      onValuesChange={onInternalChange}
    >
      {searchRender()}
    </Form>
  );
};


export default QuickForm;
