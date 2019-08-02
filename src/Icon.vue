<template>
    <svg class="w-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'WheelIcon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .w-icon {width: 1em; height: 1em;}
</style>