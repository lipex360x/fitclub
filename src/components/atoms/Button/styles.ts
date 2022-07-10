import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'transparent'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.size.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.xlarge};
  `,

  transparent: (theme: DefaultTheme) => css`
    background: transparent;
    border-color: ${theme.color.orange};
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, transparent, fullWidth }) => css`
    background: ${theme.color.orange};
    font-weight: ${theme.font.bold};
    border: 0.2rem solid transparent;
    transition: all ${theme.transition.fast};
    color: ${theme.color.white};

    &:hover {
      border-color: ${darken(0.1, theme.color.orange)};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${transparent && wrapperModifiers.transparent(theme)}
    ${fullWidth && wrapperModifiers.fullWidth}
  `}
`
