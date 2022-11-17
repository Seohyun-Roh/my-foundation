import { atom } from 'recoil'

const initLang = localStorage.getItem('i18nextLng') || 'en'

export const languageState = atom({
  key: '#languageState',
  default: initLang,
})
