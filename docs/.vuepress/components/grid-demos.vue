<template>
    <div>
        <w-row>
            <w-col span="6">6</w-col>
            <w-col span="6">6</w-col>
            <w-col span="6">6</w-col>
            <w-col span="6">6</w-col>
        </w-row>
        <w-row align="right">
            <w-col span="5">5</w-col>
            <w-col span="5">5</w-col>
            <w-col span="5">5</w-col>
            <w-col span="5">5</w-col>
        </w-row>
        <w-row>
            <w-col span="5">5</w-col>
            <w-col span="6" offset="1">6</w-col>
            <w-col span="7" offset="5">7</w-col>
        </w-row>
        <w-row>
            <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
            <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
            <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
            <w-col span="6" :ipad="{span:24}" :pc="{span:12}">pc:12 ipad:24 mobile:6</w-col>
        </w-row>
        <w-row>
            <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
            <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
            <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
            <w-col span="12" :ipad="{span:20,offset:2}" :pc="{span:4, offset:2}">4 20 12</w-col>
        </w-row>
    </div>
</template>

<script>
    import Row from '../../../src/Row'
    import Col from '../../../src/Col'

    export default {
        components: {
            'w-row': Row,
            'w-col': Col
        }
    }
</script>

<style lang="scss" scoped>
    .row {

    }
    .col {
        box-sizing: border-box;
        height: 50px;
        background: cornflowerblue;
        font-size: 16px;
        border: 1px solid rosybrown;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>