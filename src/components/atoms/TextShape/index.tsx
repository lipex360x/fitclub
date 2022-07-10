import React from 'react'
import * as S from './styles'

export type TextShapeProps = {
  children: React.ReactNode
  outline?: boolean
  italic?: boolean
}

export const TextShape = ({
  outline = false,
  italic = false,
  children
}: TextShapeProps) => (
  <S.Wrapper outline={outline} italic={italic}>
    {children}
  </S.Wrapper>
)
