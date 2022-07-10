import * as S from './styles'

type HeroCardPros = {
  value: number
  text: string
}

export const HeroCard = ({ value, text }: HeroCardPros) => (
  <S.Wrapper>
    <span>+ {value}</span>
    <p>{text}</p>
  </S.Wrapper>
)
