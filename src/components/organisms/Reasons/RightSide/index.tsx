import { TextShape } from 'components/atoms/TextShape'
import * as S from './styles'

export const RightSide = () => {
  return (
    <S.Wrapper>
      <span>some reasons</span>
      <div>
        <TextShape outline>Why </TextShape>
        <TextShape>chose us?</TextShape>
      </div>
    </S.Wrapper>
  )
}
