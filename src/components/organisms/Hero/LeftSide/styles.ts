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

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: ${theme.color.white};

    > p {
      text-transform: uppercase;
      font-size: ${theme.font.size.huge};
      font-weight: ${theme.font.bold};
    }

    > span {
      font-size: ${theme.font.size.large};
      letter-spacing: 0.1rem;
    }
  `}
`
