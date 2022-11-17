import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Routes from '../../index'
import GNB from '.'

describe('<GNB />', () => {
  test('언어 변경', () => {
    render(
      <RecoilRoot>
        <Router>
          <GNB />
        </Router>
      </RecoilRoot>
    )

    const korean = screen.getByRole('button', { name: 'KO' })

    userEvent.click(korean)
    expect(screen.getByText('홈')).toBeTruthy()
    expect(screen.getByText('날씨')).toBeTruthy()
    expect(screen.getByText('EN')).toBeTruthy()
  })

  test('테마 변경', () => {
    const { container } = render(
      <RecoilRoot>
        <Router>
          <Routes />
        </Router>
      </RecoilRoot>
    )

    const lightBtn = screen.getByTitle('light')

    userEvent.click(lightBtn)
    const darkSvg = container.querySelector("[data-icon='dark']") as HTMLImageElement

    expect(document.documentElement.getAttribute('color-theme')).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(darkSvg).toBeInTheDocument()
  })
})
