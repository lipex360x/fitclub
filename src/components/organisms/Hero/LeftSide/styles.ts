import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import * as TextSlideStyles from '../../../atoms/TextSlide/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 3;
    flex-direction: column;
    gap: ${theme.spacing.medium};
    padding: ${theme.spacing.small};

    ${TextSlideStyles.Wrapper} {
      margin-top: ${theme.spacing.xlarge};
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    color: ${theme.color.white};

    > p {
      text-transform: uppercase;
      font-size: calc(${theme.font.size.huge} * 1.5);
      font-weight: ${theme.font.bold};
    }

    > span {
      font-size: ${theme.font.size.large};
      letter-spacing: 0.2rem;
    }
  `}
`

export const Cards = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xsmall};
    display: flex;
    gap: 3rem;
  `}
`

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.xsmall};
  `}
`
