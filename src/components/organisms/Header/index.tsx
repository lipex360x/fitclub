import { Logo } from 'components/atoms/Logo'
import { Navbar } from 'components/molecules/Navbar'
import * as S from './styles'

export const Header = () => (
  <S.Wrapper>
    <Logo />
    <Navbar />
  </S.Wrapper>
)
