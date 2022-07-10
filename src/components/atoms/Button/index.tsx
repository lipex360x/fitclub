import React, {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import * as S from './styles'

type ButtonsTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  transparent?: boolean
  fullWidth?: boolean

  as?: React.ElementType
} & ButtonsTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    transparent = false,
    fullWidth = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    transparent={transparent}
    fullWidth={fullWidth}
    ref={ref}
    {...props}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
