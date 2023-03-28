import axios from 'axios'
import BaseService from './base.service'
const API_URL = process.env.VUE_APP_API_URL

class BetslipsService extends BaseService {
    async searchBetslip(id: string) {
        const axiosTokenlessInstance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzA0NCwiZW1haWwiOiJMT05CSS1iMjEzQHBsYWNlaG9sZGVyLmNvbSJ9.aknBTL_Ijtk2m9Y2QAV1KJZtKOg5c9eKX4_U64Dmw1s',
            },
        })

        return await axiosTokenlessInstance.get(`https://dev-guinee-onedb-retail.bitville.dev/cms/api/retail/betslip/detail/${id}`).then(({ data }) => data)
    }
}

export default new BetslipsService()
