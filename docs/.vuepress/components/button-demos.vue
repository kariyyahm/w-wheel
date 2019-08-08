<template>
    <div>
    <w-button>按钮</w-button>
    <w-button icon="like" icon-position="right">icon按钮</w-button>
    <w-button :loading="l1" @click="l1 = !l1">loading按钮</w-button>
    <w-button icon="settings" :loading="l2" @click="l2 = !l2">icon,loading按钮</w-button>
    <button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
    </button-group>
    </div>
</template>

<script>
    import Button from '../../../src/Button'
    import ButtonGroup from '../../../src/button-group'

    export default {
        components: {
            'w-button': Button,
            'button-group': ButtonGroup
        },
        data(){
            return {
                l1: true,
                l2: false

            }
        }
    }
</script>