<template>
    <div>
        <div style="margin-bottom: 30px;">
        <w-button @click="showToast1">顶部通知自动关闭</w-button>
        <w-button @click="showToast2">中间通知自动关闭</w-button>
        <w-button @click="showToast3">底部通知自动关闭</w-button>
        </div>
        <w-button @click="showToast4">通知手动关闭</w-button>
        <w-button @click="showToast5">支持 HTML 格式的通知</w-button>
        <w-button @click="showToast6">关闭通知触发回调</w-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Button from '../../../src/Button'
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
            showToast2() {
                this.$toast('3秒后，该通知自动关闭', {
                    autoClose: 3,
                    position: 'middle',
                    closeButton: {
                        text: '关闭'
                    }
                })
            },
            showToast3() {
                this.$toast('3秒后，该通知自动关闭', {
                    autoClose: 3,
                    position: 'bottom',
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
                this.$toast('<p style="color: red;">这是一条红色的通知<p>', {
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
                    },

                })
            },
        }
    }
</script>
