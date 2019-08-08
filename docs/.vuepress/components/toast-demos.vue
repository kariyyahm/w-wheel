<template>
    <div class="toast-wrapper" ref="wrapper">
        <w-button @click="showToast1">dian wo shang</w-button>
        <w-button @click="showToast2">dian wo zhong</w-button>
        <w-button @click="showToast3">dian wo xia</w-button>
        <w-button @click="showToast4">dian wo xia</w-button>
        <w-button @click="showToast5">dian wo xia</w-button>
        <w-button @click="showToast6">dian wo xia</w-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Toast from '../../../src/Toast'
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
                    autoClose: false,
                    enableHTML: true,
                    position: 'top',
                    closeButton: {
                        text: '',
                        callback() {
                            console.log('用户说他充过了啦')
                        }
                    }
                }, this.$refs.wrapper)
            },
            showToast2() {
                this.$toast('3秒后，该通知自动关闭', {
                    autoClose: 3,
                    enableHTML: true,
                    position: 'middle',
                    closeButton: {
                        text: '',
                        callback() {
                            console.log('用户说他充过了啦')
                        }
                    }
                })
            },
            showToast3() {
                this.$toast('朋友，你应该充钱了！！', {
                    closeButton: {
                        text: '老子充过了！！',
                        callback() {
                            console.log('用户说他充过了啦')
                        }
                    },
                    autoClose: 2,
                    enableHTML: true,
                    position: 'bottom'
                })
            },
            showToast4() {
                this.$toast('朋友，你应该充钱了！！', {
                    closeButton: {
                        text: '老子充过了！！',
                        callback() {
                            console.log('用户说他充过了啦')
                        }
                    },
                    autoClose: 2,
                    enableHTML: true,
                    position: 'middle'
                })
            },
            showToast5() {
                this.$toast('朋友，你应该充钱了！！', {
                    closeButton: {
                        text: '老子充过了！！',
                        callback() {
                            console.log('用户说他充过了啦')
                        }
                    },
                    autoClose: 2,
                    enableHTML: true,
                    position: 'bottom'
                })
            },
            showToast6() {
                this.$toast('朋友，你应该充钱了！！', {
                    closeButton: {
                        text: '老子充过了！！',
                        callback() {
                            console.log('用户说他充过了啦')
                        }
                    },
                    autoClose: 2,
                    enableHTML: true,
                    position: 'bottom'
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .toast-wrapper {
        padding: 20px;
        width: 100%;
        margin: 0 auto;
        height: 50vh;
        border: 1px solid #333333;
        position: relative;
        overflow: hidden;
    }

</style>