---

title: Layout 布局

---
# 布局

组件介绍：<br>

布局组件，支持各种常用布局。

组件用例：<br>

<layout-demos></layout-demos>

组件代码：

```vue
<template>
    <w-layout>
        <w-header>header</w-header>
        <w-content>content</w-content>
        <w-footer>footer</w-footer>
    </w-layout>
    <hr>
    <w-layout>
        <w-sider>sider</w-sider>
        <w-layout>
            <w-header>header</w-header>
            <w-content>content</w-content>
            <w-footer>footer</w-footer>
        </w-layout>
    </w-layout>
</template>

<script>
    export default {
        components: {
            'w-layout': Layout,
            'w-header': Header,
            'w-content': Content,
            'w-footer': Footer,
            'w-sider': Sider,
        }
    }
</script>

```