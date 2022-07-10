import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    span {
      color: ${theme.color.white};
      font-size: ${theme.font.size.xxlarge};
    }

    p {
      color: ${theme.color.gray};
      font-size: ${theme.font.size.large};
      text-transform: uppercase;
    }

    font-size: ${theme.font.size.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.small}
    `}
  `}
`
