<template>
    <div>
        <w-input value="王某某"></w-input>
        <w-input value="禁用 disabled" disabled></w-input>
        <w-input value="只读 readonly" readonly></w-input>
        <div style="margin: 10px 0">
            <w-input value="" v-model="message"></w-input>
            <span>msg: {{message}}</span>
        </div>
        <div>
            <w-input value="123" error="用户名不少于4个字符"></w-input>
        </div>
    </div>
</template>

<script>
    import Input from '../../../src/Input'

    export default {
        components: {
            'w-input': Input,
        },
        data() {
            return {
                message: ''
            }
        }
    }
</script>