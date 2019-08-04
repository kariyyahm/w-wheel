<template>
    <div class="toast" ref="wrapper">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'WheelToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true,
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHTML: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-background: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        color: white;
        align-items: center;
        background: $toast-background;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        .close {
            margin-left: 16px;
            flex-shrink: 0;
        }

        .line {
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }

</style>