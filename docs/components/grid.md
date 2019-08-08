---

title: Grid 栅格

---
# 栅格

组件介绍：<br>

栅格组件，支持设置宽度、排列方向、间隔等属性，支持响应式布局。

组件用例：<br>

<grid-demos></grid-demos>

组件代码：

```vue
<template>
    <w-row>
        <w-col span="6">6</w-col>
        <w-col span="6">6</w-col>
        <w-col span="6">6</w-col>
        <w-col span="6">6</w-col>
    </w-row>
    <w-row align="right">
        <w-col span="5">5</w-col>
        <w-col span="5">5</w-col>
        <w-col span="5">5</w-col>
        <w-col span="5">5</w-col>
    </w-row>
    <w-row>
        <w-col span="5">5</w-col>
        <w-col span="6" offset="1">6</w-col>
        <w-col span="7" offset="5">7</w-col>
    </w-row>
    <w-row>
        <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
        <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
        <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>            
        <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
    </w-row>
    <w-row>
        <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
        <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
        <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
        <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
    </w-row>
</template>

<script>
    export default {
        components: {
            'w-row': Row,
            'w-col': Col
        }
    }
</script>
```