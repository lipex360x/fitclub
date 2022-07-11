import * as S from './styles'
import Heart from 'assets/heart.png'
export const HeroHeart = () => (
  <S.Wrapper>
    <img src={Heart} alt="" />
    <h2>Heart Rate</h2>
    <h1>116 bpm</h1>
  </S.Wrapper>
)
