import { FormProps, message } from 'antd';
import React, { createContext, FC, JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import AdvancedForm from './advancedForm';
import './index.less';
import QuickForm from './quickForm';
import ToolBar from './toolBar';

type Values = object;

interface AdvancedSearchProps {
  formProps?: FormProps
  showAdvanced?: boolean,
  filterEmpty?: boolean,
  children: any,
  className?: any,
  style?: any,
  reset?: () => void,
  onKeyEnter?: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
  onChange?: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
  onSearch?: (allValues: Values, simpleValues: Values, advancedValues: Values) => void;
}
type SearchType = ReactElement<any, string | JSXElementConstructor<unknown>>[];

export const reset = () => {
  document.getElementById('xdad-advanced-reset')?.click();
};
export const AdvancedContext: any = createContext({});

const AdvancedSearch: FC<AdvancedSearchProps> = ({
  children,
  showAdvanced = true,
  filterEmpty = true,
  style,
  className,
  formProps,
  onSearch,
  onChange,
  onKeyEnter
}) => {

  const [allValues, setAllValues] = useState<Values>({});
  const [quickValues, setQuickValues] = useState<Values>({});
  const [advancedValues, setAdvancedValues] = useState<Values>({});
  const [isAdvance, setIsAdvance] = useState(false);
  // ReactNode
  const [quickForm, setQuickForm] = useState<SearchType>([]);
  const [advancedForm, setAdvancedForm] = useState<SearchType>([]);
  const [toolbar, setToolbar] = useState<SearchType>([]);

  // 属性
  const [advancedProps, setAdvancedProps] = useState();
  const [quickProps, setQuickProps] = useState();

  const store = {
    allValues, setAllValues,
    quickValues, setQuickValues,
    advancedValues, setAdvancedValues
  };

  useEffect(() => {
    classifySearch();
  }, [children]);

  type setFunction = ((value:React.SetStateAction<undefined>) => void)

  // 搜索分类
  const classifySearch = () => {
    const _simpleSearch: SearchType = [];
    const _advancedSearch: SearchType = [];
    const _toolBar: SearchType = [];
    const NALE_LIST = ['QuickForm', 'AdvancedForm', 'ToolBar'];

    // 处理分类
    const setSeatchClassify = (child: any, set: setFunction, array: SearchType) => {
      const { children: props_child = [], ...rest } = child?.props || {};
      set(rest);
      // 获取属性
      const propsPropsChildren = Array.isArray(props_child) ? props_child : [props_child];
      array.push(...propsPropsChildren);
    };

    // 分类判断：判断快捷搜索/高级搜索/工具栏
    const classify = (child: any) => {
      const name = child?.type?.name;
      if (name === 'QuickForm') {
        setSeatchClassify(child, setQuickProps, _simpleSearch);}
      if (name === 'AdvancedForm') {
        setSeatchClassify(child, setAdvancedProps, _advancedSearch);  }
      if (name === 'ToolBar') {
        setSeatchClassify(child, setAdvancedProps, _toolBar);
      }
      if (!NALE_LIST.includes(name)) {
        if (child.props['data-simple']) { _simpleSearch.push(child); }
        else if (child.props['data-toolbar']) { _toolBar.push(child); }
        else { _advancedSearch.push(child); }
      }
    };

    // 子元素是数组，表示有多个子元素
    if (Array.isArray(children)) {
      children?.forEach((child) => {
        classify(child);
      });
    }
    // 只有一个子元素，就判断是否有data-simple属性，有为快捷搜索，反之为高级搜索
    if (!Array.isArray(children)) {
      classify(children);
    }
    // 如果元素大于4个，提示信息
    if (_simpleSearch.length > 4) {
      message.info('快捷搜索建议控制在4个以内！');
    }
    //  如果快捷搜索的长度为0，则打开高级搜索
    if (_simpleSearch.length === 0) {
      setIsAdvance(true);
    }

    setAdvancedForm(_advancedSearch);
    setQuickForm(_simpleSearch);
    setToolbar(_toolBar);
  };

  return (
    <AdvancedContext.Provider value={store}>
      <div className={`xdad-advance clearfix ${className}`} style={style}>
        <div className="xdad-advance-seach">
          <div className="xdad-advance-toolbar" style={{justifyContent:toolbar.length===0?'flex-end':'space-between' }}>
            <ToolBar>
              {toolbar}
            </ToolBar>
            <QuickForm {...formProps} onKeyEnter={onKeyEnter} onChange={onChange} filterEmpty={filterEmpty} {...quickProps}  >
              {quickForm}
            </QuickForm>
          </div>
          {showAdvanced && (advancedForm.length !== 0) &&
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
          <AdvancedForm
            {...formProps}
            filterEmpty={filterEmpty}
            onSearch={onSearch}
            {...advancedProps}>
            {advancedForm}
          </AdvancedForm>}
      </div>
    </AdvancedContext.Provider>
  );
};

export default AdvancedSearch;
