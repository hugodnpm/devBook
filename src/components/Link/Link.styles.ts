import styled, { css } from 'styled-components'
import { Link as LinkRRD } from 'react-router-dom'

type linkColors = 'primary' | 'secondary'

interface LinkProps {
  color?: linkColors
}
export const Link = styled(LinkRRD)<LinkProps>`
  ${({ theme, color = 'primary' }) => css`
    font-weight: ${theme.font.weight.normal}; // retira o negrito
    text-decoration: none; // retira a linha embaixo do link
    color: ${theme.colors[color]};

    &:hover {
      filter: brightness(80%);
    }
  `}
`
