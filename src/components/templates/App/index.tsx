import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'
import { Hero } from 'components/organisms/Hero'
import { Programs } from 'components/organisms/Programs'

import * as S from './styles'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <Hero />
        <Programs />
      </S.Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}
