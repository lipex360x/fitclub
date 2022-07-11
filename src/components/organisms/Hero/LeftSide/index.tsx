import Button from 'components/atoms/Button'
import { TextShape } from 'components/atoms/TextShape'
import { TextSlide } from 'components/molecules/TextSlide'
import { HeroCard } from 'components/molecules/HeroCard'
import { Header } from 'components/organisms/Header'
import * as S from './styles'

export const LeftSide = () => {
  const data = [
    { value: 140, text: 'expert coachs' },
    { value: 978, text: 'members joined' },
    { value: 50, text: 'fitness programs' }
  ]

  return (
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
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </span>
      </S.Title>

      <S.Cards>
        {data.map(({ text, value }, index) => (
          <HeroCard key={index} text={text} value={value} />
        ))}
      </S.Cards>

      <S.Buttons>
        <Button>Get Started</Button>
        <Button transparent>Learn More</Button>
      </S.Buttons>
    </S.Wrapper>
  )
}
