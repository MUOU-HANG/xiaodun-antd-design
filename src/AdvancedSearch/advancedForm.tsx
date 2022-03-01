import { Button, Form, FormProps } from 'antd';
import React, { FC, useContext, useEffect } from 'react';
import { AdvancedContext } from './advancedSearch';
import { filterEmptyData } from './utils';

type Values = object;

export interface AdvancedFormProps extends FormProps {
  onSearch?: (allValues: Values, advancedValues: Values, QuickValues: Values) => void
  filterEmpty?: boolean,
  style?: any,
  className?:any,
}

const AdvancedForm: FC<AdvancedFormProps> = ({ children, onSearch,filterEmpty,style, className:className1,...rest }) => {
  const { setAllValues, allValues, quickValues, setAdvancedValues } = useContext(AdvancedContext);
  const [form] = Form.useForm();

  const advancedFormRender = (
    children instanceof Array && children.map((child, index) => {
      const type: any = child.type;
      const name = child.props['data-name'];
      const itemprops = child.props['data-itemprops'];
      const isSelect = typeof type === 'object' && type?.render?.name === 'InternalSelect';
      const width = typeof child.props['data-width'] === 'number' ? `${child.props['data-width']} px` : child.props['data-width'];

      return (
        <Form.Item
          key={name ?? index}
          name={name}
          {...itemprops}
          style={{ width: width ? width : (isSelect ? '160px' : '240px') ,...style}}
          className="xdad-advance-form-item"
        >
          {child}
        </Form.Item>
      );
    })
  );

  useEffect(() => {
    setAdvancedValues(form.getFieldsValue());
  }, []);


  // 高级搜索
  const onInternalSearch = () => {
    const values = form.getFieldsValue();
    const _allValues = { ...allValues, ...values };
    setAllValues(_allValues);
    setAdvancedValues(values);
    onSearch?.(
      filterEmpty ? filterEmptyData(_allValues):_allValues,
      filterEmpty ? filterEmptyData(values):values,
      filterEmpty ? filterEmptyData(quickValues) : quickValues
    );
  };
  return (
    <Form
      name="test"
      className={`xdad-advance-form ${className1}`}
      form={form}
      layout="inline"
      {...rest}
    >
      {advancedFormRender}
      <Form.Item className="xdad-advance-form-btns">
        <Button onClick={onInternalSearch} htmlType='submit'>查询</Button>
        <Button id="xdad-advanced-reset" style={{ marginLeft: 10 }} onClick={() => form.resetFields()}>重置</Button>
      </Form.Item>
    </Form>
  );
};


export default AdvancedForm;
