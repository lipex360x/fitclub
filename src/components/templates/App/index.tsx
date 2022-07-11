import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'
import { Hero } from 'components/organisms/Hero'

import * as S from './styles'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <Hero />
      </S.Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}
