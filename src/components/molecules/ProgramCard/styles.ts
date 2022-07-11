import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};
    padding: ${theme.spacing.small};
    background: ${theme.color.caloryCard};
    color: ${theme.color.white};
    justify-content: space-between;
    /* transition: all ${theme.transition.fast}; */

    svg {
      fill: ${theme.color.white};
      width: ${theme.spacing.medium};
      height: ${theme.spacing.medium};
    }

    h1,
    h2 {
      font-weight: ${theme.font.normal};
    }

    h1 {
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.bold};
    }

    h2 {
      font-size: ${theme.font.size.small};
      line-height: ${theme.font.size.xxlarge};
    }

    div {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xsmall};
      font-size: ${theme.font.size.medium};

      img {
        width: ${theme.spacing.xsmall};
      }
    }

    &:hover {
      cursor: pointer;
      background: ${theme.color.planCard};
    }
  `}
`
