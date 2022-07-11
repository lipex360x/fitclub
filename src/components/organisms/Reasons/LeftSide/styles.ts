import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;

    gap: ${theme.spacing.xsmall};

    img {
      object-fit: cover;
    }

    > :nth-child(1) {
      width: 18rem;
      height: 48rem;
      grid-row: 1/3;
    }

    > :nth-child(2) {
      width: auto;
      height: 26rem;
      grid-column: 2/4;
    }

    > :nth-child(3) {
      width: 26rem;
      grid-column: 2/3;
    }

    > :nth-child(4) {
      width: 20rem;
      grid-row: 2;
      grid-column: 3/4;
    }
  `}
`
