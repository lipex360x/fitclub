import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.medium};
    font-size: ${theme.font.size.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.small}
    `}
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.xxlarge};
    color: ${theme.color.white};

    text-transform: uppercase;
    font-size: ${theme.font.size.huge};
    font-weight: ${theme.font.bold};
  `}
`

export const Cards = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.xsmall};
    margin-top: ${theme.spacing.medium};
  `}
`
