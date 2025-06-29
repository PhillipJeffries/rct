import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import Fetch from './fetch'
import LangSwitcher from './LangSwitcher'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<LangSwitcher />)

  // ACT
//   await userEvent.click(screen.getByText('Load Greeting'))
//   await screen.findByRole('heading')

  // ASSERT
  // screen.getByText('перевод').click()
  expect(screen.getByText('перевод')).toBeInTheDocument()
  // await userEvent().click(screen.getByText('перевод'))

  // expect(screen.getByText('translate')).not.toBeInTheDocument()


//   expect(screen.getByRole('button')).toBeDisabled()
})