import * as S from './styles'
import { HeroHeart } from 'components/molecules/HeroHeart'
import heroImage from 'assets/hero_image.png'
import heroImageBack from 'assets/hero_image_back.png'
import { HeroBullet } from 'components/molecules/HeroBullet'

export const RightSide = () => (
  <S.Wrapper>
    <HeroHeart />
    <S.HeroImage src={heroImage} />
    <S.HeroImageBack src={heroImageBack} />
    <HeroBullet />
  </S.Wrapper>
)
