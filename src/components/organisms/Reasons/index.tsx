import { LeftSide } from 'components/organisms/Reasons/LeftSide'
import { RightSide } from './RightSide'
import * as S from './styles'

export const Reasons = () => {
  return (
    <S.Wrapper>
      <LeftSide />
      <RightSide />
    </S.Wrapper>
  )
}
