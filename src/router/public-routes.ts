import { RouteConfig } from 'vue-router'
import HomePage from '@/views/home/index.vue'
import ScanTicketPage from '@/views/scan-ticket/index.vue'

const publicRoutes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
    },
    {
        path: '/scan-ticket',
        name: 'Ticket Detail Page',
        component: ScanTicketPage,
    },
]

export default publicRoutes
