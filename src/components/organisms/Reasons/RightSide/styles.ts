import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1 1;
    flex-direction: column;
    gap: ${theme.spacing.small};

    > span {
      text-transform: uppercase;
      display: inline-block;
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

export const ReasonsList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    font-weight: ${theme.font.bold};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};

    li {
      display: flex;
      align-items: center;
      color: ${theme.color.white};
      gap: ${theme.spacing.xsmall};

      img {
        width: 3rem;
        height: 3rem;
      }
    }
  `}
`

export const Partners = styled.div`
  ${({ theme }) => css`
    > span {
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.size.medium};
      color: ${theme.color.gray};
    }

    > div {
      display: flex;
      gap: ${theme.spacing.xxsmall};

      img {
        width: 4.5rem;
      }
    }
  `}
`
