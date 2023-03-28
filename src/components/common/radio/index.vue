<template>
    <label :class="`radio radio__${type}${className !== '' ? ` ${className}` : ''} ${isNoHover ? `no-hover` : ``}`" @click="onChangeRadio()" :disabled="isDisable">
        <input type="radio" name="radio" :value="value" :checked="valueChecked === value" />
        <span class="radio-label">{{ getTranslatedText(label) }}</span>
    </label>
</template>
<script>
import EventBus from '@/utils/EventBus'
import Loading from '@/components/common/loading'
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
        valueChecked: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        isNoHover: {
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
        onChangeRadio() {
            if (!isStrEmpty(this.nameFunction)) {
                EventBus.$emit(this.nameFunction, this.paramFunction)
            }
        },
    },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/common/_radio.scss';
</style>
