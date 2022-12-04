import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'

export const decorators = [
  (Story) => {
    document.documentElement.setAttribute('color-theme', useDarkMode() ? 'dark' : 'light')

    return <Story />
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: themes.dark,
    light: themes.light,
    current: 'light',
  },
}
