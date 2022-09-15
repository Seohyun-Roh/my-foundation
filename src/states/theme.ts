import { atom } from 'recoil'

const initTheme = localStorage.getItem('theme') || 'light'

export const themeState = atom({
  key: '#themeState',
  default: initTheme,
})
