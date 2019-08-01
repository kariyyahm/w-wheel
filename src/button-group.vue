<template>
<div class="button-group">
    <slot></slot>
</div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
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