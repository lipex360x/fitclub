import * as S from './styles'

type HeroCardPros = {
  value: number
  text: string
}

export const HeroCard = ({ value, text }: HeroCardPros) => (
  <S.Wrapper>
    <h1>+ {value}</h1>
    <h2>{text}</h2>
  </S.Wrapper>
)
