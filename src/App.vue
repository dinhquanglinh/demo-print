<template>
    <div>
        <!-- <Header /> -->
        <router-view />
        <!-- <Footer /> -->
        <Notications />
    </div>
</template>
<script>
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
import Notications from '@/components/common/notications/index.vue'

export default {
    components: {
        Footer,
        Header,
        Notications,
    },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/main.scss';
</style>
