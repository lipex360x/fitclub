import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-size: ${theme.font.size.medium};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};
    width: fit-content;
    background: ${theme.color.darkGray};
    padding: ${theme.spacing.xsmall};
    border-radius: ${theme.border.radius.soft};

    img {
      width: calc(${theme.font.size.xlarge} * 1.6);
    }

    h2 {
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.normal};
      color: ${theme.color.gray};
    }

    h1 {
      font-size: ${theme.font.size.xxlarge};
      font-weight: ${theme.font.normal};
    }
  `}
`
