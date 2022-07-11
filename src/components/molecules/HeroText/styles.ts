import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    color: ${theme.color.white};

    > p {
      text-transform: uppercase;
      font-size: calc(${theme.font.size.huge} * 1.4);
      font-weight: ${theme.font.bold};
    }

    > span {
      font-size: calc(${theme.font.size.large} * 0.9);
      letter-spacing: 0.2rem;
    }
  `}
`
