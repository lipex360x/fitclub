import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'
import { Hero } from 'components/organisms/Hero'
import { Programs } from 'components/organisms/Programs'

import * as S from './styles'
import { Reasons } from 'components/organisms/Reasons'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <Hero />
        <Programs />
        <Reasons />
      </S.Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}
