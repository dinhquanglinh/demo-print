<template>
    <div class="notications">
        <v-alert v-if="showAlert" :type="alertType" dismissible @input="showAlert = false">
            {{ getTranslatedText(alertText) }}
        </v-alert>
    </div>
</template>

<script>
import languageMixins from '@/mixins/language/language-mixins'
import EventBus from '@/utils/EventBus'

export default {
    mixins: [languageMixins],
    data() {
        return {
            showAlert: false,
            alertText: '',
            alertType: '',
            timeoutDuration: 3000,
        }
    },
    created() {
        EventBus.$on('show-notications', (param) => this.showAlertWithTimeout(param))
    },
    destroyed() {
        EventBus.$off('show-notications', () => {})
    },
    methods: {
        showAlertWithTimeout(param) {
            this.alertText = param.text
            this.alertType = param.type

            this.showAlert = true
            setTimeout(() => {
                this.showAlert = false
            }, this.timeoutDuration)
        },
    },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/common/_notications.scss';
</style>
