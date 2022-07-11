import { IconType } from 'react-icons'
import RightRow from 'assets/rightArrow.png'
import * as S from './styles'

export type ProgramCardProps = {
  heading: string
  details: string
  Icon: IconType
}

export const ProgramCard = ({ heading, details, Icon }: ProgramCardProps) => {
  return (
    <S.Wrapper>
      {<Icon />}
      <h1>{heading}</h1>
      <h2>{details}</h2>
      <div>
        Join Now <img src={RightRow} alt="" />
      </div>
    </S.Wrapper>
  )
}
