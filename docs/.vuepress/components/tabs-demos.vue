<template>
    <div>
        <w-tabs selected="s3">
            <w-tabs-head>
                <template slot="actions">
                    <w-button>设置</w-button>
                </template>
                <w-tabs-item name="s1" >
                    <w-icon name="settings"></w-icon>
                    小学
                </w-tabs-item>
                <w-tabs-item name="s2">中学</w-tabs-item>
                <w-tabs-item name="s3">大学</w-tabs-item>
                <w-tabs-item name="s4" disabled>禁用</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-pane name="s1">小学课本</w-tabs-pane>
                <w-tabs-pane name="s2">中学课本</w-tabs-pane>
                <w-tabs-pane name="s3">大学课本</w-tabs-pane>
                <w-tabs-pane name="s4">禁用内容</w-tabs-pane>
            </w-tabs-body>
        </w-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsHead from '../../../src/tabs-head'
    import TabsItem from '../../../src/tabs-item'
    import TabsBody from '../../../src/tabs-body'
    import TabsPane from '../../../src/tabs-pane'
    import Button from '../../../src/Button'
    import Icon from '../../../src/Icon'

    export default {
        components: {
            'w-tabs': Tabs,
            'w-tabs-head': TabsHead,
            'w-tabs-item': TabsItem,
            'w-tabs-body': TabsBody,
            'w-tabs-pane': TabsPane,
            'w-button': Button,
            'w-icon': Icon
        }
    }
</script>