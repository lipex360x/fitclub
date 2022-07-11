import * as S from './styles'

import Image1 from 'assets/image1.png'
import Image2 from 'assets/image2.png'
import Image3 from 'assets/image3.png'
import Image4 from 'assets/image4.png'

export const LeftSide = () => {
  return (
    <S.Wrapper>
      <img src={Image1} />
      <img src={Image2} />
      <img src={Image3} />
      <img src={Image4} />
    </S.Wrapper>
  )
}
