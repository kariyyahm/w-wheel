<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHTML"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WheelToast',
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 3,
                validator(value) {
                    return value === false || typeof value === 'number'
                }
            },
            // autoCloseDelay: {
            //     type: [Boolean,Number],
            //     default: 3
            // },
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
            },
            position: {
                type: String,
                default: top,
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true}
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        methods: {
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-background: rgba(0, 0, 0, 0.75);

    @keyframes sider-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes sider-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        $animation-duration: 500ms;
        z-index: 999;

        &.position-top {
            top: 0;

            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: sider-down $animation-duration;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);;

            .toast {
                animation: fade-in $animation-duration;
            }

        }

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: sider-up $animation-duration;
            }
        }
    }

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        display: flex;
        color: white;
        align-items: center;
        background: $toast-background;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        .message {
            padding: 8px 0;
        }

        .close {
            margin-left: 16px;
            flex-shrink: 0;
            cursor: pointer;
        }


        .line {
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }

</style>