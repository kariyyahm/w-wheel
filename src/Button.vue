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
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .w-button {
        font-size: var(--font-size); height: var(--button-height);
        padding: 0 1em; border-radius: var(--border-radius);
        border: 1px solid var(--border-color); background: var(--button-background);
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-background);}
        &:focus {outline: none;} vertical-align: middle;
        display: inline-flex; justify-content: center; align-items: center;

        > .content {order: 2}
        > .icon {order: 1; margin-right: .1em;}
        &.icon-right {
            > .content {order: 1}
            > .icon {order: 2; margin-right: 0; margin-left: .1em;}
        }
        .loading {animation: spin 1s infinite linear;}
    }
</style>