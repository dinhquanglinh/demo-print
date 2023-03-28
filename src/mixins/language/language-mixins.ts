import { isStrEmpty } from '@/utils/utils'

export default {
    data(): any {
        return {}
    },

    methods: {
        getTranslatedText(text: string, xargs: any = {}): string | undefined {
            if (!text) {
                return
            }
            const rsText = text.toLowerCase()
            let translatedText = rsText
            const locale = localStorage.getItem('lang')
            const localeStorage = localStorage.getItem('muti_language_' + locale) || ''

            if (!isStrEmpty(localeStorage)) {
                const locale = JSON.parse(localeStorage)
                translatedText = locale[rsText] || rsText
            }
            if (xargs) {
                for (const key in xargs) {
                    translatedText = translatedText.replace('[' + key + ']', xargs[key])
                }
            }

            return translatedText
        },
    },
}
