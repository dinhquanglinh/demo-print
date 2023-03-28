<template>
    <div class="box-loader" :class="{ 'screen-page': isLoadingPage }">
        <span class="loader"></span>
    </div>
</template>
<script>
export default {
    props: {
        isLoadingPage: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss">
@import '~ThemePath/scss/common/_loading.scss';
</style>
