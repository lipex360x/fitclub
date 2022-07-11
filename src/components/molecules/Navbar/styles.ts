import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${theme.color.white};
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    transition: color ${theme.transition.fast};

    &:hover {
      color: ${theme.color.orange};
    }
  `}
`
