import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import * as TextSlideStyles from '../../../atoms/TextSlide/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 3;
    padding: 2rem;

    ${TextSlideStyles.Wrapper} {
      margin-top: 4rem;
    }
  `}
`
