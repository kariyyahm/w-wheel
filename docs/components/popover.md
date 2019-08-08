---

title: Popover 气泡卡片

---
# 气泡卡片

组件介绍：<br>

气泡卡片组件，支持设置上下左右方向、触发事件等功能。

组件用例：<br>

<popover-demos></popover-demos>

组件代码：

```vue
<template>
    <w-popover position="top">
        <template slot="content">
            <div>我是内容</div>
        </template>
        <w-button>向上</w-button>     
    </w-popover>
    
     <w-popover position="top" trigger="hover">
        <template slot="content">
            <div>我是内容</div>
        </template>
        <w-button>上浮</w-button>
     </w-popover>
</template>

<script>
    export default {
        components: {
            'w-popover': Popover,
            'w-button': Button,
        }
    }
</script>
```
