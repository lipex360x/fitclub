import { TextShape } from 'components/atoms/TextShape'
import * as S from './styles'

import Tick from 'assets/tick.png'
import Nb from 'assets/nb.png'
import Adidas from 'assets/adidas.png'
import Nike from 'assets/nike.png'

export const RightSide = () => {
  return (
    <S.Wrapper>
      <span>some reasons</span>

      <div>
        <TextShape outline>Why </TextShape>
        <TextShape>chose us?</TextShape>
      </div>

      <S.ReasonsList>
        <li>
          <img src={Tick} /> OVER 140+ EXPERT COACHS
        </li>

        <li>
          <img src={Tick} /> TRAIN SMARTER AND FASTER THAN BEFORE
        </li>

        <li>
          <img src={Tick} /> 1 FREE PROGRAM FOR NEW MEMBER
        </li>

        <li>
          <img src={Tick} /> RELIABLE PARTNERS
        </li>
      </S.ReasonsList>

      <S.Partners>
        <span>OUR PARTNERS</span>

        <div>
          <img src={Nb} />
          <img src={Adidas} />
          <img src={Nike} />
        </div>
      </S.Partners>
    </S.Wrapper>
  )
}
