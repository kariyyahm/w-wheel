<template>
<div class="button-group">
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: 'WheelButtonGroup',
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if(name !== 'button') {
                    console.warn(`button-group 的子元素应均为 w-button，不应存在 ${name}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-group {
        display: inline-flex; vertical-align: middle;
        > .w-button {border-radius: 0; margin-left: -1px;
            &:hover {position: relative; z-index: 1;}
            &:first-child {border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius); margin-left: 0;}
            &:last-child {border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);}
        }
    }
</style>