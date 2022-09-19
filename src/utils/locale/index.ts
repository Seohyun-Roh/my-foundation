import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enFront from './en/front.json'
import koFront from './ko/front.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        front: enFront,
      },
      ko: {
        front: koFront,
      },
    },
    fallbackLng: 'en',
    debug: false,

    ns: ['front'],
    defaultNS: 'front',

    keySeparator: false, // we use content as keys
    allowObjectInHTMLChildren: true,

    interpolation: {
      escapeValue: false, // not needed for react
      formatSeparator: ',',
    },
  } as InitOptions)

export default i18n
