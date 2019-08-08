<template>
    <div>
        <w-collapse :selected.sync="selectedTab">
            <w-collapse-item title="标题1" name="c1">第一个内容</w-collapse-item>
            <w-collapse-item title="标题2" name="c2">第二个内容</w-collapse-item>
            <w-collapse-item title="标题3" name="c3">第三个内容</w-collapse-item>
        </w-collapse>
        <hr>
        <w-collapse :selected.sync="selectedTab2" single>
        <w-collapse-item title="标题1" name="c1">第一个内容 </w-collapse-item>
        <w-collapse-item title="标题2" name="c2">第二个内容 </w-collapse-item>
        <w-collapse-item title="标题3" name="c3">第三个内容 </w-collapse-item>
        </w-collapse>
    </div>
</template>

<script>
    import collapse from '../../../src/collapse'
    import collapseItem from '../../../src/collapse-item'


    export default {
        components: {
            'w-collapse': collapse,
            'w-collapse-item': collapseItem
        },
        data() {
            return {
                selectedTab: ['c1','c2'],
                selectedTab2: ['c1']
            }
        }
    }
</script>