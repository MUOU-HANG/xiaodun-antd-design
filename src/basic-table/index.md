---
title: BasicTable 基础表格
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# BasicTable 基础表格(未完成)

使用Antd封装的基础表格

## 代码演示

### 基础使用

<code src="./demos/index.tsx" />

## API

#### BasicTable
| 属性      | 说明         | 类型           | 是否必填 | 默认值 |
| --------- | ------------ | -------------- | -------- | ------ |
| formProps | Form 表单API | FormProps      | N        | {}     |
| onSearch  | 搜索回调     | (values)=>void | N        | -      |

#### BasicTable Item
| 属性      | 说明                      | 类型          | 是否必填 | 默认值 |
| --------- | ------------------------- | ------------- | -------- | ------ |
| itemprops | Form.Item 表单Item API    | Formitemprops | N        | {}     |
| data-name | 与Form.Item的name属性一致 | string        | N        | -      |
