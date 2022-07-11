import * as S from './styles'

import Calories from 'assets/calories.png'

export const HeroBullet = () => (
  <S.Wrapper>
    <S.Image src={Calories} />
    <div>
      <h2>Heart Rate</h2>
      <h1>116 bpm</h1>
    </div>
  </S.Wrapper>
)
