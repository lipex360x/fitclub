import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.color.caloryCard};
    border-radius: ${theme.border.radius};
    width: fit-content;
    padding: ${theme.spacing.small} ${theme.spacing.xsmall};
    text-transform: uppercase;
    color: ${theme.color.white};

    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      z-index: ${theme.layers.overlay};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.medium}
    `};
  `}
`

export const Slider = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background: ${theme.color.orange};
    width: calc(${theme.spacing.xxlarge} * 1.5);
    height: 80%;
    left: 0.8rem;
    border-radius: ${theme.border.radius};
    z-index: ${theme.layers.base};
  `}
`
