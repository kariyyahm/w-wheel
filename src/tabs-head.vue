<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WheelTabsHead',
        inject: ['eventBus'],
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    $tabs-height: 40px;
    .tabs-head {
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        align-items: center;
        > .action-wrapper {margin-left: auto;}
    }
</style>