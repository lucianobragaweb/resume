import { render, screen } from '@testing-library/react'
import App from './App'
import i18n from './i18n'

beforeAll(async () => {
  await i18n.changeLanguage('pt_BR')
})

test('renders resume header content', () => {
  render(<App />)
  const titleElement = screen.getByText(/Desenvolvedor Full Stack Sênior/i)
  expect(titleElement).toBeInTheDocument()
})
