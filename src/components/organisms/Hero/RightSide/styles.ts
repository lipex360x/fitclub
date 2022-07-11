import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import * as HeroHeartStyles from 'components/molecules/HeroHeart/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 0.8;
    background: ${theme.color.orange};
    padding: ${theme.spacing.xlarge};
    z-index: ${theme.layers.overlay};

    ${HeroHeartStyles.Wrapper} {
      position: absolute;
      right: ${theme.spacing.xlarge};
    }
  `}
`

export const HeroImage = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 10rem;
    right: 12rem;
    width: 40rem;
    z-index: ${theme.layers.overlay};
  `}
`

export const HeroImageBack = styled.img`
  ${({ theme }) => css`
    position: absolute;
    z-index: ${theme.layers.base};
    right: 32rem;
    width: 24rem;
  `}
`
