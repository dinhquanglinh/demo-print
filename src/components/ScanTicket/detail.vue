<template>
    <div class="scan-ticket-detail">
        <LoadingScreen v-if="isLoadingScreen" />
        <template v-else>
            <h2 class="scan-ticket-detail__title">{{ getTranslatedText('scan ticket') }}</h2>
            <p class="scan-ticket-detail__desciption">{{ getTranslatedText('ticket details') }}</p>
            <div class="scan-ticket-detail__list-table">
                <div class="scan-ticket-detail__table">
                    <span class="scan-ticket-detail__table-title">{{ getTranslatedText('ticket details') }}</span>
                    <div class="scan-ticket-detail__table-item">
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('purchase date') }}</span>
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value"> {{ renderDate(dataSource.transaction.created_at) }} </span>
                    </div>
                    <div class="scan-ticket-detail__table-item">
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('payment received') }}</span>
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value">{{ dataSource.transaction.currency_code }} {{ renderPrice(dataSource.transaction.total || dataSource.transaction.amount) }} </span>
                    </div>
                    <div class="scan-ticket-detail__table-item">
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('ticket') }}</span>
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value">{{ ticketId }}</span>
                    </div>
                </div>
                <div class="scan-ticket-detail__table">
                    <span class="scan-ticket-detail__table-title">{{ getTranslatedText('ticket') }}</span>
                    <table>
                        <thead>
                            <tr>
                                <th>{{ getTranslatedText('no') }}</th>
                                <th>{{ getTranslatedText('select') }}</th>
                                <th>{{ getTranslatedText('game') }}</th>
                                <th>{{ getTranslatedText('wager') }}</th>
                                <th>{{ getTranslatedText('winnings') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, i) in dataSource.details" :key="i">
                                <td>#{{ i + 1 }}</td>
                                <td>
                                    <div class="scan-ticket-detail__table-list-number" v-for="(bet, index) in v.bet.bets" :key="index">
                                        <span v-if="index > 0">+</span>
                                        <div class="scan-ticket-detail__table-item-number" v-for="(number, j) in bet" :key="j">
                                            {{ number }}
                                        </div>
                                    </div>
                                </td>
                                <td>{{ v.game_name.replace(/-/g, ' ') }}</td>
                                <td>{{ renderPrice(v.wager) }}</td>
                                <td>{{ v.winnings ? renderPrice(v.winnings) : 'N/A' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="scan-ticket-detail__table">
                    <span class="scan-ticket-detail__table-title">{{ getTranslatedText('draw') }}</span>
                    <div class="scan-ticket-detail__table-item-draw" v-for="(value, index) in dataSource.transaction.events" :key="index">
                        <div class="scan-ticket-detail__table-item">
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('draw date') }}</span>
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value"> {{ renderDate(value.draw_date) }} </span>
                        </div>
                        <div class="scan-ticket-detail__table-item">
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('purchase date') }}</span>
                            <div class="scan-ticket-detail__table-list-number" v-for="(bet, index) in value.results" :key="index">
                                <span v-if="index > 0">+</span>
                                <div class="scan-ticket-detail__table-item-number" v-for="(number, j) in bet" :key="j">
                                    {{ number }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scan-ticket-detail__table">
                    <span class="scan-ticket-detail__table-title">{{ dataSource.transaction.cancelations > 0 ? getTranslatedText('Ticket is canceled') : getTranslatedText('winnings') }}</span>
                    <div v-if="isCheckShowMakePatment" class="scan-ticket-detail__table-item">
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('make payment') }}</span>
                        <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value">{{ renderMakePayment() }} </span>
                    </div>

                    <div class="scan-ticket-detail__table-empty" v-if="dataSource.transaction.winnings === 0 && dataSource.transaction.cancelations <= 0">
                        <span>{{ getTranslatedText('no winnings') }}</span>
                    </div>
                    <div v-for="(payment, paymentIndex) in payments" :key="paymentIndex" class="scan-ticket-detail__table-payment-list">
                        <div class="scan-ticket-detail__table-item">
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('payment date') }}</span>
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value"> {{ renderDate(payment.payment_created_at) }} </span>
                        </div>
                        <div class="scan-ticket-detail__table-item">
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-label">{{ getTranslatedText('amount') }}</span>
                            <span class="scan-ticket-detail__table-item-text scan-ticket-detail__column-value"> {{ dataSource.transaction.currency_code }} {{ renderPrice(payment.payment_total) }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import EventBus from '@/utils/EventBus'
import languageMixins from '@/mixins/language/language-mixins'
import RadioCommon from '@/components/common/radio/index.vue'
import ButtonCommon from '@/components/common/button/index.vue'
import LoadingScreen from '@/components/common/loading/index.vue'

import { formatDate, formatPrice } from '@/utils/utils'

export default {
    mixins: [languageMixins],
    components: { RadioCommon, ButtonCommon, LoadingScreen },
    props: {
        dataSource: {
            type: Object,
            default: () => {},
        },
        ticketId: {
            type: String,
            default: '',
        },
        ticketType: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            isLoadingScreen: true,
            payments: null,
            isCheckShowMakePatment: false,
        }
    },
    created() {
        this.fetchData()
    },
    destroyed() {},
    methods: {
        showNotification(text, type) {
            const param = {
                text: text,
                type: type,
            }
            EventBus.$emit('show-notications', param)
        },

        fetchData() {
            const { transaction } = this.dataSource
            let isCheckWinnings = parseFloat(transaction.winnings) > 0 && parseFloat(transaction.winnings) > parseFloat(transaction.paid) + parseFloat(transaction.payments)
            let isCheckCancelations = parseFloat(transaction.cancelations) > 0 && parseFloat(transaction.cancelations) > parseFloat(transaction.paid) + parseFloat(transaction.payments)
            if (isCheckWinnings || isCheckCancelations) {
                this.isCheckShowMakePatment = true
            }

            if (this.ticketType === 'L') {
                const payments = this.dataSource.details.filter((v) => {
                    return v.payment_total && v.payment_total > 0
                })
                this.payments = payments
                console.log(payments, 'payments')
                this.isLoadingScreen = false
            }
            if (this.ticketType === 'S') {
                let details = this.dataSource.details
                details.paid = 0
                if (details.payments > 0) {
                    payments = [
                        {
                            payment_created_at: details.paid_date,
                            payment_total: details.payments,
                        },
                    ]

                    this.payments = payments
                }
                this.isLoadingScreen = false
            }
        },

        renderMakePayment() {
            const price = parseFloat(this.dataSource.transaction.winnings) + parseFloat(this.dataSource.transaction.cancelations) - (parseFloat(this.dataSource.transaction.paid) + parseFloat(this.dataSource.transaction.payments))
            return formatPrice(price)
        },

        renderDate(date) {
            const dateFormat = formatDate(new Date(date))

            let valueDate = `${dateFormat.day}/${dateFormat.month}/${dateFormat.year} ${dateFormat.hour24h}:${dateFormat.minutes}`

            return valueDate
        },

        renderPrice(price) {
            return formatPrice(price)
        },
    },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/scan-ticket/_detail.scss';
</style>
