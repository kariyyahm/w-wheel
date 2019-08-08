---

title: Input 输入框

---
# 输入框

组件介绍：<br>

输入框组件，支持添加 disabled、readonly、error 属性，双向绑定等功能。

组件用例：<br>

<input-demos></input-demos>

组件代码：

```vue
<template>
        <w-input value="王某某"></w-input>
        <w-input value="禁用 disabled" disabled></w-input>
        <w-input value="只读 readonly" readonly></w-input>
        <w-input value="" v-model="message"></w-input>
        <span>msg: {{message}}</span>
        <w-input value="123" error="用户名不少于4个字符"></w-input>
</template>

<script>
    export default {
        components: {
            'w-input': Input,
        },
        data() {
            return {
                message: ''
            }
        }
    }
</script>
```