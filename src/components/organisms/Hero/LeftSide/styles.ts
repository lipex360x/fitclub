import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import * as TextSlideStyles from 'components/molecules/TextSlide/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 3;
    flex-direction: column;
    gap: ${theme.spacing.medium};
    padding: ${theme.spacing.medium};

    ${TextSlideStyles.Wrapper} {
      margin-top: ${theme.spacing.xxlarge};
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
