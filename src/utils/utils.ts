import { getAccessToken } from '@/services/axios'
const VUE_APP_MOBILE_APP_DOMAIN = process.env.VUE_APP_MOBILE_APP_DOMAIN

export const isArrayEmpty = (arr: any[]): boolean => {
    return !arr || arr.length === 0 || !Array.isArray(arr)
}

export const isStrEmpty = (str: string): boolean => {
    return !str || str.length === 0
}

export const isObjEmpty = (obj: any): boolean => {
    return !obj || Object.keys(obj).length === 0
}

export const formatHours = (date: Date, isNameMonth?: boolean, isFormatDate?: boolean): string => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let hours = date.getHours()
    let minutes: any = date.getMinutes()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = isNameMonth ? monthNames[date.getMonth()] : date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    const year = date.getFullYear()
    const convertHours = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    const strTime = isFormatDate ? `${day} ${month} ${year}` : `${day} ${month} ${year}, ${hours}:${minutes} ${convertHours}`
    return strTime
}

export const formatDate = (
    date: Date
): {
    minutes: string | number
    day: string | number
    month: string | number
    monthName: string
    monthFullName: string
    year: number
    convertHours: string
    dayName: string
    hour24h: string | number
    seconds: string | number
} => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const monthFullNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let hours = date.getHours()
    let minutes: string | number = date.getMinutes()
    let seconds: string | number = ''
    const dayName = days[date.getDay()]
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const monthName = monthNames[date.getMonth()]
    const monthFullName = monthFullNames[date.getMonth()]

    const year = date.getFullYear()
    const convertHours = hours >= 12 ? 'pm' : 'am'
    const hour24h = hours < 10 ? '0' + hours : hours
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes

    seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    const param = {
        hours,
        minutes,
        day,
        month,
        monthName,
        monthFullName,
        year,
        convertHours,
        dayName,
        hour24h,
        seconds,
    }

    return param
}

export const formatPrice = (number: number, decimal = 2) => {
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimal,
        maximumFractionDigits: decimal,
    })
    console.log(formatter.format(number), 'formatter.format(number)')
    return formatter.format(number)
}

export const idRandom = () => {
    return ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (ch) => {
        const c = Number(ch)
        return (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    })
}

export const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const sortBy = (array: any[], key: string) => {
    return array.sort((a, b) => a[key] - b[key])
}

export const formatDateUTC = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dayName = days[date.getDay()]
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()

    const strTime = `${dayName} ${day} ${month} ${year}`
    return strTime
}

export const groupByDate = (array: any[], key: string, isFormatDate?: boolean) => {
    const groups = array.reduce((groups, game) => {
        let date = ''
        if (isFormatDate) {
            const format = formatDate(new Date(game[key]))
            date = `${format.day}-${format.monthFullName}-${format.year}`
        } else {
            date = game[key].split(' ')[0]
        }
        if (!groups[date]) {
            groups[date] = []
        }
        groups[date].push(game)
        return groups
    }, {})

    const groupArrays = Object.keys(groups).map((date) => {
        return {
            id: idRandom(),
            date: formatDateUTC(new Date(date)),
            games: groups[date],
        }
    })
    return groupArrays
}

export const groupByKey = (array: any[], key: string) => {
    const result = array.reduce(function (r, a) {
        r[a[key]] = r[a[key]] || []
        r[a[key]].push(a)
        return r
    }, Object.create(null))

    const groupArrays = Object.keys(result).map((value) => {
        return {
            item: value,
            list: result[value],
        }
    })

    return groupArrays
}

export const changeToSlug = (str: string) => {
    str = str.toLowerCase()
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
    str = str.replace(/(đ)/g, 'd')
    str = str.replace(/([^0-9a-z-\s])/g, '')
    str = str.replace(/(\s+)/g, '-')
    str = str.replace(/^-+/g, '')
    str = str.replace(/-+$/g, '')
    return str
}

export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export const timeSince = (date: any): string => {
    const newDate: any = new Date()

    const seconds = Math.floor((newDate - date) / 1000)

    let interval = seconds / 31536000

    if (interval > 1) {
        return Math.floor(interval) + ' years'
    }
    interval = seconds / 2592000
    if (interval > 1) {
        return Math.floor(interval) + ' months'
    }
    interval = seconds / 86400
    if (interval > 1) {
        return Math.floor(interval) + ' days'
    }
    interval = seconds / 3600
    if (interval > 1) {
        return Math.floor(interval) + ' hours'
    }
    interval = seconds / 60
    if (interval > 1) {
        return Math.floor(interval) + ' minutes'
    }
    return Math.floor(seconds) + ' seconds'
}

export const creditCardMask = (number: string) => {
    number = number.replace(/\d{4}(?= \d{4})/g, '****')
    let numberFormat = number.slice(0, 15)
    const numberFormatChil = number.slice(15, 19).replace(/\d(?=\d{2})/g, '*')

    numberFormat = `${numberFormat}${numberFormatChil}`

    return numberFormat
}

export const formatMoney = (n: number, currency: string) => {
    return (
        (currency || '') +
        n.toFixed(2).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '' + c : c
        })
    )
}

export const formatNumberMoney = (n: number, currency: string) => {
    return (
        (currency || '') +
        n.toFixed(2).replace(/./g, function (c, i, a) {
            return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '' + c : c
        })
    )
}

export const numberWithCommas = (price: number) => {
    return Number(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatMoneyInt = (n: number, currency: string): string => {
    return (
        (currency || '') +
        n.toFixed(2).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c
        })
    )
}

export const checkDigitCommon = (event: any): any => {
    if (
        !(
            event.keyCode == 8 || // backspace
            event.keyCode == 46 || // delete
            event.keyCode == 190 ||
            (event.keyCode >= 35 && event.keyCode <= 40) || // arrow keys/home/end
            (event.keyCode >= 48 && event.keyCode <= 57) || // numbers on keyboard
            (event.keyCode >= 96 && event.keyCode <= 105)
        ) // number on keypad
    ) {
        event.preventDefault() // Prevent character input
    }
}

export const renderClassBall = (number: number, index: number, minimumBalls: number, maxiumBlue: number, maxiumGreen: number) => {
    const className = index + 1 > minimumBalls ? 'ball-red' : number > maxiumBlue && number <= maxiumGreen ? 'ball-blue' : 'ball-green'

    return className
}

export const filterFullTextSearch = (items, text, key, keyTwo) => {
    text = text.split(' ')
    return items.filter((item) => {
        const itemFormat = { ...item }
        itemFormat[key] = itemFormat[key].toLowerCase()
        return text.every((el) => {
            el = el.toLowerCase()
            return itemFormat[key].indexOf(el) > -1 || itemFormat[keyTwo].indexOf(el) > -1
        })
    })
}

export const removeTagHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
}

export const uniqByKeepFirst = (a: any[], key: (item: any) => any): any[] => {
    const seen = new Set()
    return a.filter((item) => {
        const k = key(item)
        return seen.has(k) ? false : seen.add(k)
    })
}

export const removeDouble = (list1, list2, key, isUnion = false) => {
    const list = list1.filter((a) => isUnion === list2.some((b) => a[key] === b[key]))
    return list
}

export const renderLocalePrice = (number: number, decimal = 2) => {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: decimal,
        maximumFractionDigits: decimal,
    })
}

export const renderLocaleNumber = (number: number) => {
    const locale = localStorage.getItem('locale') === 'ar' ? 'ar-EG' : 'en-US'
    return number.toLocaleString(locale)
}

export const redirectPathApp = (path: string) => {
    const token = getAccessToken()
    window.open(`${VUE_APP_MOBILE_APP_DOMAIN}${path}${token ? `?token=${token}` : ``}`, '_blank')
}

export const redirectNewTab = (path: string): void => {
    window.open(`${path}`, '_blank')
}

export const getParamQueryTheme = (key: string): string => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const account = params.get(key) || ''
    return account
}

export const isCrossOriginFrame = (): boolean => {
    try {
        return window.top != null && !window.top.location.hostname
    } catch (e) {
        return true
    }
}

export const isSameDay = (date: string) => {
    const today = new Date()
    const inputDate = new Date(date)
    let isSameDay = false

    if (today.getFullYear() == inputDate.getFullYear() && today.getMonth() == inputDate.getMonth() && today.getDate() == inputDate.getDate()) {
        isSameDay = true
    }

    return isSameDay
}
