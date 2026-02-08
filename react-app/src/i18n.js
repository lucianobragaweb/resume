import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import locales from './locales'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'pt_BR',
    debug: false,
    detection: {
        caches: ['cookie'],
        cookieSameSite: 'strict',
        lookupQuerystring: 'lang',
        lookupCookie: 'next-i18next',
        order: ['querystring', 'cookie', 'header']
    },
    interpolation: {
        escapeValue: false
    },
    resources: {
        ar: {
            translation: locales.ar
        },
        de: {
            translation: locales.de
        },
        en: {
            translation: locales.en
        },
        es: {
            translation: locales.es
        },
        fr: {
            translation: locales.fr
        },
        hi: {
            translation: locales.hi
        },
        ja: {
            translation: locales.ja
        },
        pt_BR: {
            translation: locales.pt_BR
        },
        ru: {
            translation: locales.ru
        },
        zh: {
            translation: locales.zh
        }
    }
})

export default i18n
