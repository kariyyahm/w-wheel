<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
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

<style lang="scss">
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
    }
</style>