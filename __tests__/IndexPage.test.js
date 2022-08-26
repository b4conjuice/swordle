import { render } from '@testing-library/react'
import IndexPage from '@/pages/index'

it('renders index page', () => {
  const { getByText } = render(<IndexPage />)
  const title = getByText('home')
  expect(title).toBeInTheDocument()
})
