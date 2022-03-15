---
title: CountdownButton 倒计时按钮
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# CountdownButton 倒计时按钮

倒计时按钮常应用于获取手机、邮箱验证码等业务场景。

## 代码演示
### 基础使用

<code src="./demos/index.tsx" />

  ## API

| 属性         | 说明             | 类型      | 是否必填 | 默认值 |
| ------------ | ---------------- | --------- | -------- | ------ |
| maxSecondNum | 最大倒计时秒数 |`number`|N|60|
| txt | 初始化状态文本 |`number`|N|'获取验证码'|
| loadingTxt | 加载时文本 |`number`|N|'发送中'|
| disabledTxt | 不可用状态文本 |`number`|N|'n秒后重试'|
| onClick | 点击回调 |(completeCallback: () => void) => void|N|-|


除以上 API 外，倒计时按钮还支持 Button 组件（Ant Design）的所有 API 。
