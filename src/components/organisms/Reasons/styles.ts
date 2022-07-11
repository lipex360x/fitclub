import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.medium};
    display: flex;
    gap: ${theme.spacing.medium};
  `}
`
