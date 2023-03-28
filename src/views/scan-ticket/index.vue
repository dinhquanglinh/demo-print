<template>
    <v-main>
        <ScanTicketComponent v-if="step === 1" />
        <DetailTicketComponent v-else :dataSource="dataDetail" :ticketId="ticketId" :ticketType="ticketType" />
    </v-main>
</template>
<script>
import EventBus from '@/utils/EventBus'

import ScanTicketComponent from '@/components/ScanTicket/index.vue'
import DetailTicketComponent from '@/components/ScanTicket/detail.vue'

export default {
    components: { DetailTicketComponent, ScanTicketComponent },
    data() {
        return {
            step: 1,
            dataDetail: null,
            ticketId: '',
            ticketType: '',
        }
    },
    created() {
        EventBus.$on('on-show-ticket-detail', (payload) => this.onShowTicketDetail(payload))
    },
    destroyed() {
        EventBus.$off('on-show-ticket-detail', () => {})
    },
    methods: {
        onShowTicketDetail(payload) {
            console.log(payload)
            this.dataDetail = payload.data
            this.ticketId = payload.ticketId
            this.ticketType = payload.ticketType
            this.step = 2
        },
    },
}
</script>
