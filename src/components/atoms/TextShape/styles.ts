import styled, { css, DefaultTheme } from 'styled-components'

import { TextShapeProps } from '.'
// import media from 'styled-media-query'

const wrapperModifiers = {
  outline: (theme: DefaultTheme) => css`
    color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-text-stroke-width: 0.1rem;
    -webkit-text-stroke-color: ${theme.color.white};
  `
}

export const Wrapper = styled.span<TextShapeProps>`
  ${({ theme, outline, italic }) => css`
    font-style: ${italic ? 'italic' : 'none'};

    ${outline && wrapperModifiers.outline(theme)}
  `}
`
