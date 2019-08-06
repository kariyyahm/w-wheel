<template>
    <div class="tabs-item" @click="onClick" :class="classes"
         :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'WheelTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                required: true
            },
        },
        computed: {
            classes() {
                return {active: this.active, disabled: this.disabled}
            }
        },
        methods: {
            onClick() {
                if (this.disabled) {
                    return
                }
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name
                })

            }
        }
    }
</script>

<style lang="scss" scoped>
    $color: #2776D4;
    $disabled-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;

        &.active {
            color: $color;
            font-weight: bold;
        }

        &.disabled {
            color: $disabled-color;
            cursor: not-allowed;
        }
    }
</style>