<template>
    <button :class="`button button__${type}${className !== '' ? ` ${className}` : ''} ${isNoHover ? `no-hover` : ``}`" @click="onChangeButton(value)" :disabled="isLoading || isDisable">
        {{ getTranslatedText(value) }}
        <Loading v-if="isLoading" :isLoadingPage="false" />
    </button>
</template>
<script>
import EventBus from '@/utils/EventBus'
import Loading from '@/components/common/loading/index.vue'
import languageMixins from '@/mixins/language/language-mixins'

import { isStrEmpty } from '@/utils/utils'

export default {
    mixins: [languageMixins],
    components: { Loading },
    props: {
        type: {
            type: String,
            default: 'default',
        },
        nameFunction: {
            type: String,
            default: '',
        },
        paramFunction: {
            type: String | Object | Array,
            default: '',
        },
        className: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        isNoHover: {
            type: Boolean,
            default: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDisable: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
    methods: {
        onChangeButton() {
            if (!isStrEmpty(this.nameFunction)) {
                EventBus.$emit(this.nameFunction, this.paramFunction)
            }
        },
    },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/common/_button.scss';
</style>
