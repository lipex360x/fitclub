import { Logo } from '../../atoms/Logo'
import { Navbar } from '../../molecules/Navbar'
import * as S from './styles'

export const Header = () => (
  <S.Wrapper>
    <Logo />
    <Navbar />
  </S.Wrapper>
)
