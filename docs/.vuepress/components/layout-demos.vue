<template>
    <div>
        <w-layout style="height: 300px">
            <w-header>header</w-header>
            <w-content>content</w-content>
            <w-footer>footer</w-footer>
        </w-layout>
        <hr>
        <w-layout style="height: 300px;">
            <w-sider>sider</w-sider>
            <w-layout>
                <w-header>header</w-header>
                <w-content>content</w-content>
                <w-footer>footer</w-footer>
            </w-layout>
        </w-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/Layout'
    import Header from '../../../src/Header'
    import Content from '../../../src/Content'
    import Footer from '../../../src/Footer'
    import Sider from '../../../src/Sider'

    export default {
        components: {
            'w-layout': Layout,
            'w-header': Header,
            'w-content': Content,
            'w-footer': Footer,
            'w-sider': Sider,
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        background: #E6CEAC;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        background: #D6D5B7;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer {
        background: #D1BA74;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .sider {
        background: #ECAD9E;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
    }
</style>