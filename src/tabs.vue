<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'WheelTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {eventBus: new Vue()}
        },
        provide() {
            return {eventBus: this.eventBus}
        },
        mounted() {
            if(this.$children.length === 0) {
                console && console.log && console.warn('tabs 的子组件需要 tabs-head 和 tabs-body')
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'WheelTabsHead') {
                    vm.$children.forEach((childMv) => {
                        if (childMv.$options.name === 'WheelTabsItem'
                            && childMv.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childMv)
                        }
                    })
                }
            })
        }
    }


</script>

<style lang="scss" scoped>

</style>