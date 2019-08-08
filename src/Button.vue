<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
        <w-icon v-if="icon && !loading" class="icon" :name="icon"></w-icon>
        <w-icon v-if="loading" class="loading icon" name="loading"></w-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './Icon'

    export default {
        // props: ['icon', 'iconPosition']
        name: 'WheelButton',
        components: {
            'w-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(val) {
                    return !(val !== 'left' && val !== 'right' && val !== '');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $border-radius: 4px;
    $border-color: #999;
    $button-background: white;
    $border-color-hover: #666;
    $button-active-background: #eee;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .w-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-background;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-background;
        }

        &:focus {
            outline: none;
        }

        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        > .content {
            order: 2
        }

        > .icon {
            order: 1;
            margin-right: .1em;
        }

        &.icon-right {
            > .content {
                order: 1
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>