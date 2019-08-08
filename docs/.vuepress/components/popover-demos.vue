<template>
    <div>
        <w-popover position="top">
            <template slot="content">
                <div>我是内容</div>
            </template>
            <w-button>向上</w-button>
        </w-popover>

        <w-popover position="bottom">
            <template slot="content">
                <div>我是内容</div>
            </template>
            <w-button>向下</w-button>
        </w-popover>

        <w-popover position="left">
            <template slot="content">
                <div>我是内容</div>
            </template>
            <w-button>向左</w-button>
        </w-popover>

        <w-popover position="right">
            <template slot="content">
                <div>我是内容</div>
            </template>
            <w-button>向右</w-button>
        </w-popover>

        <div style="margin-top: 20px;">

            <w-popover position="top" trigger="hover">
                <template slot="content">
                    <div>我是内容</div>
                </template>
                <w-button>上浮</w-button>
            </w-popover>

            <w-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>我是内容</div>
                </template>
                <w-button>下浮</w-button>
            </w-popover>

            <w-popover position="left" trigger="hover">
                <template slot="content">
                    <div>我是内容</div>
                </template>
                <w-button>左浮</w-button>
            </w-popover>

            <w-popover position="right" trigger="hover">
                <template slot="content">
                    <div>我是内容</div>
                </template>
                <w-button>右浮</w-button>
            </w-popover>
        </div>
    </div>
</template>

<script>
    import Popover from '../../../src/Popover'
    import Button from '../../../src/Button'

    export default {
        components: {
            'w-popover': Popover,
            'w-button': Button,
        }
    }
</script>