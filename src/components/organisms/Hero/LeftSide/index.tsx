import { TextShape } from '../../../atoms/TextShape'
import { TextSlide } from '../../../atoms/TextSlide'
import { Header } from '../../Header'
import * as S from './styles'

export const LeftSide = () => (
  <S.Wrapper>
    <Header />
    <TextSlide />

    <S.Title>
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
    </S.Title>
  </S.Wrapper>
)
