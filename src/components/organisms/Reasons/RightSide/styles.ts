import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1 1;
    display: flex;
    flex-direction: column;

    > span {
      text-transform: uppercase;
      color: ${theme.color.orange};
      font-weight: ${theme.font.bold};
    }

    > div {
      color: ${theme.color.white};
      text-transform: uppercase;
      font-size: ${theme.font.size.huge};
      font-weight: ${theme.font.bold};
    }
  `}
`
