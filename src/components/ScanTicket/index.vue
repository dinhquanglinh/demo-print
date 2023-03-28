<template>
    <div class="scan-ticket">
        <h2 class="scan-ticket__title">{{ getTranslatedText('scan ticket') }}</h2>
        <div class="scan-ticket__select-sport">
            <RadioCommon value="L" label="Lotto" :valueChecked="ticketType" nameFunction="on-select-ticket-type" paramFunction="L" />
            <RadioCommon value="S" label="Sport" :valueChecked="ticketType" nameFunction="on-select-ticket-type" paramFunction="S" />
        </div>
        <div class="scan-ticket__input">
            <span class="scan-ticket__input-left-addon">{{ ticketType }} -</span>
            <input v-model="ticketNumber" type="text" placeholder="Enter amount" />
        </div>
        <div class="scan-ticket__box-button">
            <ButtonCommon className="w100" :isNoHover="true" :isLoading="isLoadingButton" :isDisable="ticketNumber === ''" value="search" nameFunction="on-search-ticket-detail" />
            <span class="scan-ticket__text-or">{{ getTranslatedText('or') }}</span>
            <ButtonCommon className="w100" :isNoHover="true" :isLoading="isLoadingButton" type="active" value="scan ticket" nameFunction="onScanCodeBar" />
            <span class="scan-ticket__text-or">{{ getTranslatedText('or') }}</span>
            <ButtonCommon className="w100" :isNoHover="true" :isLoading="isLoadingButton" value="Replay" nameFunction="print-test" />
        </div>

        <ReaderCode />
    </div>
</template>
<script>
import EventBus from '@/utils/EventBus'
import languageMixins from '@/mixins/language/language-mixins'
import RadioCommon from '@/components/common/radio/index.vue'
import ButtonCommon from '@/components/common/button/index.vue'
import BetslipsService from '@/services/betslip.service'
import ReaderCode from '@/components/common/reader-code/index.vue'

import { isObjEmpty, isStrEmpty } from '@/utils/utils'

export default {
    mixins: [languageMixins],
    components: { RadioCommon, ButtonCommon, ReaderCode },
    data() {
        return {
            ticketType: 'L',
            isLoadingButton: false,
            ticketNumber: '',
            isShowTrue: false,
            text: '',
            id: null,
        }
    },
    created() {
        EventBus.$on('on-select-ticket-type', (type) => (this.ticketType = type))
        EventBus.$on('on-search-ticket-detail', () => this.onSearchTicketDetail())
        EventBus.$on('print-test', () => this.print())
    },
    destroyed() {
        EventBus.$off('on-select-ticket-type', () => {})
        EventBus.$off('on-search-ticket-detail', () => {})
        EventBus.$off('print-test', () => {})
    },
    mounted() {},
    methods: {
        showNotification(text, type) {
            const param = {
                text: text,
                type: type,
            }
            EventBus.$emit('show-notications', param)
        },

        async onSearchTicketDetail() {
            try {
                const param = await this.validateGetTicket()
                if (!isObjEmpty(param.response)) {
                    const { response, ticket } = param

                    if (response.status !== 200) {
                        this.showNotification(response.message, 'error')
                    } else {
                        const payload = {
                            data: response.data,
                            ticketId: ticket,
                            ticketType: this.ticketType,
                        }

                        EventBus.$emit('on-show-ticket-detail', payload)
                        this.isLoadingButton = false
                    }
                }
            } catch (error) {
                console.log(error)
                this.isLoadingButton = false
            }
        },

        async validateGetTicket() {
            try {
                this.isLoadingButton = true
                let ticket = this.ticketNumber
                if (isStrEmpty(this.ticketNumber)) {
                    this.showNotification('please input ticket number!', 'warning')

                    this.isLoadingButton = false
                    return false
                }

                ticket = `${this.ticketType}-${ticket}`

                const response = await BetslipsService.searchBetslip(ticket)

                const param = {
                    response,
                    ticket,
                }
                return param
            } catch (error) {
                console.log(error)
            }
            //
        },

        print() {
            // printV1()
        },
    },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/scan-ticket/_index.scss';
</style>
