import { TextShape } from 'components/atoms/TextShape'
import { ProgramCard } from 'components/molecules/ProgramCard'
import data from './mock'
import * as S from './styles'

export const Programs = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <TextShape italic outline>
          Explore our
        </TextShape>
        <TextShape italic>Programs</TextShape>
        <TextShape italic outline>
          to shape you
        </TextShape>
      </S.Header>
      <S.Cards>
        {data.map(({ id, heading, details, Icon }) => (
          <ProgramCard
            key={id}
            heading={heading}
            details={details}
            Icon={Icon}
          />
        ))}
      </S.Cards>
    </S.Wrapper>
  )
}
