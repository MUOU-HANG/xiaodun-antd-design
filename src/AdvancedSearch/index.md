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

## API

#### AdvancedSearch
| 属性         | 说明             | 类型      | 是否必填 | 默认值 |
| ------------ | ---------------- | --------- | -------- | ------ |
| formProps    | Form 表单API     | FormProps | N        | {}     |
| showAdvanced | 是否展示高级搜索 | boolean   | N        | false  |
| filterEmpty | 是否过滤undefined/null空值 | boolean   | N        | true  |



#### 方法

| 属性       | 说明             | 类型                                               | 是否必填 | 默认值 |
| :--------- | ---------------- | -------------------------------------------------- | -------- | ------ |
| onChange   | 快捷搜索实时回调 | (currentChange, allValues, simpleValues, advancedValues) => void | N        | -      |
| onSearch   | 搜索回调         | (allValues, simpleValues, advancedValues) => void                              | N        | -      |
| onKeyEnter | 快捷搜索回车回调 | (currentChange, allValues, simpleValues, advancedValues) => void                             | N        | -      |
| reset | 重置高级搜索数据 | ()=>void                              | N        | -      |



#### AdvancedSearch Item
| 属性        | 说明                      | 类型          | 是否必填 | 默认值 |
| ----------- | ------------------------- | ------------- | -------- | ------ |
| itemProps   | Form.Item 表单Item API    | FormItemProps | N        | {}     |
| data-name   | 与Form.Item的name属性一致 | string        | N        | -      |
| data-simple | 快捷搜索                  | boolean       | N        | true   |

