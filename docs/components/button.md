---

title: Button 按钮

---
# 按钮

组件介绍：<br>

按钮组件，支持添加 icon，设置 icon 位置，加载状态等功能。

组件用例：<br>

<button-demos></button-demos>

组件代码：

```vue
<template>
    <w-button>按钮</w-button>
    <w-button icon="like" icon-position="right">icon按钮</w-button>
    <w-button :loading="l1" @click="l1=!l1">loading按钮</w-button>
    <w-button icon="settings" :loading="l2" @click="l2=!l2">icon,loading按钮</w-button>
    <button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
    </button-group>
</template>
    
<script>
    export default {
        components: {
            'w-button': Button,
            'button-group': ButtonGroup
        },
        data(){
            return {
                l1: true,
                l2: false
            }
        }
    }
</script>
```