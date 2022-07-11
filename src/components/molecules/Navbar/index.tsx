import Button from 'components/atoms/Button'
import * as S from './styles'

export const Navbar = () => (
  <S.Wrapper>
    <S.ListItem>Home</S.ListItem>
    <S.ListItem>Programs</S.ListItem>
    <S.ListItem>Why us</S.ListItem>
    <S.ListItem>Plans</S.ListItem>
    <S.ListItem>Testimonials</S.ListItem>
    <S.ListItem>
      <Button transparent>Join Now</Button>
    </S.ListItem>
  </S.Wrapper>
)
