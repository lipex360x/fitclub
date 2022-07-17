import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import InputText from '.'

import props from './mock'

describe('<InputText />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<InputText {...props} />)

    const inputtext = screen.getByRole('heading', { name: /InputText/i })

    debug(container)

    expect(inputtext).toBeInTheDocument()
  })
})
