import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h1 {
      color: ${theme.color.white};
      font-size: calc(${theme.font.size.xxlarge} * 1.2);
      font-weight: ${theme.font.normal};
    }

    h2 {
      color: ${theme.color.gray};
      font-size: ${theme.font.size.medium};
      text-transform: uppercase;
      font-weight: ${theme.font.normal};
    }

    font-size: ${theme.font.size.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.small}
    `}
  `}
`
