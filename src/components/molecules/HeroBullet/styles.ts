import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    background: ${theme.color.caloryCard};
    padding: 1.5rem;
    width: fit-content;
    position: absolute;
    top: 48rem;
    right: 48rem;
    border-radius: ${theme.border.radius.soft};

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h2 {
        font-size: ${theme.font.size.medium};
        font-weight: ${theme.font.normal};
        color: ${theme.color.gray};
      }

      h1 {
        font-size: ${theme.font.size.xxlarge};
        font-weight: ${theme.font.normal};
        color: ${theme.color.white};
      }
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 5rem;
  `}
`
