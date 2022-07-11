import Button from 'components/atoms/Button'
import { TextSlide } from 'components/molecules/TextSlide'
import { HeroCard } from 'components/molecules/HeroCard'
import { Header } from 'components/organisms/Header'
import * as S from './styles'
import { HeroText } from 'components/molecules/HeroText'

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
      <HeroText />

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
