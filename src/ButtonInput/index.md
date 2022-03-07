---
title: ButtonInput 按钮输入框
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# ButtonInput 按钮输入框
点击按钮出现输入框

## 代码示例

### 基础使用
<code src="./demos/index.tsx" />

### `style`样式修改
`style`属性将直接作用于input标签上,如需要对按钮进较大改动，可以使用`replace`属性替换按钮。
<code src="./demos/styles.tsx" />

### 复杂情况
直接自己写一个吧，反正这个也不是很麻烦

## API
| 属性         | 说明             | 类型      | 是否必填 | 默认值 |
| ------------ | ---------------- | --------- | -------- | ------ |
| width | 输入框的宽度 |`number`\|`string`|N|-|
| text | 按钮显示的文字 |`string`|N|'新增'|
| size | 组件大小 |`large` \| `middle` \| `small`|N|-|
| placeholder | 输入框提示的文字 |`string`|N|'请输入'|
| replace | 替换按钮 |React.ReactNode|N|-|
| onKeyEnter | 按下回车键回调 |(value:string) => void|N|-|
| onChange | 实时回调 |ChangeEventHandler\<HTMLInputElement\> \| undefined|N|-|



