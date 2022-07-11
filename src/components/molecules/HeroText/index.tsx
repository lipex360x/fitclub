import { TextShape } from 'components/atoms/TextShape'
import * as S from './styles'

export const HeroText = () => (
  <S.Wrapper>
    <p>
      <TextShape outline>shape </TextShape>
      <TextShape>your </TextShape>
    </p>
    <p>
      <TextShape>ideal body</TextShape>
    </p>
    <span>
      In here we will help you to shape and build your ideal body and live up
      your life to fullest
    </span>
  </S.Wrapper>
)
