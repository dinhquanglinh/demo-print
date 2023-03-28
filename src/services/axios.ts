import axios from 'axios'
import axiosLib from 'axios'

const axiosAuth = axiosLib.create()

export function setToken(data) {
    localStorage.setItem('access_token', data)
}

export function getAccessToken() {
    return localStorage.getItem('access_token')
}

export function deleteToken() {
    localStorage.removeItem('access_token')
}

export const getLocale = () => {
    return localStorage.getItem('locale') || 'en'
}

function getRefreshToken() {
    return localStorage.getItem('refresh_token')
}

axiosAuth.interceptors.request.use((request) => {
    const token = process.env.VUE_APP_TOKEN || getAccessToken()
    if (token) {
        request.headers.Authorization = token
        request.headers.ContentType = 'application/json'
    }

    request.headers.locale = getLocale()

    return request
})

axiosAuth.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data)
        }
        return Promise.reject(error.message)
    }
)

export default axiosAuth
