---
title: AdvancedSearch 高级搜索
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# AdvancedSearch 高级搜索

用于多个搜索条件，当搜索条件为1时，不建议使用高级搜索

## 代码演示

### 基础使用

<code src="./demos/index.tsx" />

### 快捷搜索
当只有快捷搜索时，会自动隐藏高级搜索按钮
<code src="./demos/quickSearch.tsx" />

### 表格操作工具栏
当需要对表格做一些批量增加、删除等操作且有多个时，可以使用`<ToolBar>`包裹起来，当只有一个时，可以使用`data-toolbar`属性进行设置。`<ToolBar>`目前只作为容器使用，没有任何附加的属性和方法。
<code src="./demos/toolbar.tsx" />

### 数据校验
<code src="./demos/validate.tsx" />

### Group组件
AdvancedSearch 可以使用Group作为单个表单组件使用，在Group上指定`data-name`同样可以获取到内部的数据；但是由于自动宽度变化默认为`240px`，当使用Group时请根据项目需要指定宽度；当需要改变组件长度时，使用`data-width`手动指定。

<code src="./demos/groupSearch.tsx" />

### 使用Form组件的其他功能
在`formProps`和`itemprops`属性中，可以传入对应的[`Form`表单](https://ant.design/components/form-cn/#API)的属性，效果相同；

`formProps`对整个组件生效，当指定了子组件的`Form`表单属性后，`formProp`会立即失效；

子组件配置属性与`Form`相同
****
<code src="./demos/formProps.tsx" />

## API

#### AdvancedSearch
| 属性         | 说明             | 类型      | 是否必填 | 默认值 |
| ------------ | ---------------- | --------- | -------- | ------ |
| formProps    | Form 表单API     | FormProps | N        | {}     |
| showAdvanced | 是否展示高级搜索 | boolean   | N        | true  |
| filterEmpty | 是否过滤undefined/null空值 | boolean   | N        | true  |



#### 方法

| 属性       | 说明             | 类型                                               | 是否必填 | 默认值 |
| :--------- | ---------------- | -------------------------------------------------- | -------- | ------ |
| onChange   | 快捷搜索实时回调 | (current, allValues, quickValues, advancedValues) => void | N        | -      |
| onSearch   | 搜索回调         | (allValues, advancedValues，quickValues) => void                              | N        | -      |
| onKeyEnter | 快捷搜索回车回调 | (current, allValues, quickValues, advancedValues) => void                             | N        | -      |
| reset | 重置高级搜索数据 | ()=>void     `const {rest} = AdvancedSearch` | N        | -      |

### AdvancedForm&QuickForm
| 属性       | 说明             | 类型                                               | 是否必填 | 默认值 |
| :--------- | ---------------- | -------------------------------------------------- | -------- | ------ |
| reset | 重置高级搜索数据 | ()=>void     `const {rest} = AdvancedSearch` | N        | -      |
| onChange   | 快捷搜索实时回调 `QuickForm`| (current, allValues, quickValues, advancedValues) => void | N        | -      |
| onSearch   | 搜索回调 `AdvancedForm`        | (allValues, advancedValues，quickValues) => void                              | N        | -      |
| onKeyEnter | 快捷搜索回车回调`QuickForm` | (current, allValues, quickValues, advancedValues) => void                             | N        | -      |


#### AdvancedSearch Item
| 属性        | 说明                      | 类型          | 是否必填 | 默认值 |
| ----------- | ------------------------- | ------------- | -------- | ------ |
| itemprops   | Form.Item 表单Item API    | Formitemprops | N        | {}     |
| data-width   | 指定子组件宽度 | string|number        | N        | -      |
| data-name   | 与Form.Item的name属性一致 `在itemprops指定name效果相同` | string        | N        | -      |
| data-simple | 快捷搜索                  | boolean       | N        | true   |

