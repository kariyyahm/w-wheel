<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WheelTabsHead',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm)=>{
                let {width, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width*0.8}px`
                this.$refs.line.style.left = `${left+width*0.1}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $color: #2776D4;
    $tabs-height: 40px;
    .tabs-head {
        display: flex;
        height: $tabs-height;
        justify-content: flex-start;
        position: relative;
        > .action-wrapper {margin-left: auto;}
        > .line {position: absolute; bottom: 0; border-bottom: 1px solid $color; transition: all .3s}
    }
</style>