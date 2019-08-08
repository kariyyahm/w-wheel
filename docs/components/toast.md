---

title: Toast 弹出式通知

---
# 弹出式通知

组件介绍：<br>

弹出式通知组件，支持设置弹窗内容(支持HTML格式)、弹窗位置、自动及手动关闭、关闭回调等功能。

组件用例：<br>
<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>
组件代码：

```vue
<template>
    <w-button @click="showToast1">顶部通知自动关闭</w-button>
    <w-button @click="showToast4">通知手动关闭</w-button>
    <w-button @click="showToast5">支持 HTML 格式的通知</w-button>
    <w-button @click="showToast6">关闭通知触发回调</w-button>
</template>

<script>
    import Vue from 'vue'
    import Plugin from '../../../src/plugin'

    Vue.use(Plugin)
    export default {
        components: {
            'w-button': Button
        },
        methods: {
            showToast1() {
                this.$toast('3秒后，该通知自动关闭', {
                    autoClose: 3,
                    position: 'top',
                    closeButton: {
                        text: '关闭'
                    }
                })
            },
            showToast4() {
                this.$toast('该通知需要您手动关闭', {
                    autoClose: false,
                    position: 'middle',
                    closeButton: {
                        text: '关闭'
                    }
                })
            },
            showToast5() {
                this.$toast('<p style="color:red;">这是一条红色的通知<p>', {
                    autoClose: false,
                    enableHTML: true,
                    position: 'middle',
                    closeButton: {
                        text: '关闭',
                    },
                })
            },
            showToast6() {
                this.$toast('该通知手动关闭后触发回调', {
                    autoClose: false,
                    position: 'middle',
                    closeButton: {
                        text: '关闭',
                        callback() {
                            alert('我是回调，确认关闭')
                        }
                    }
                })
            }
        }
    }
</script>

```
