import styled, { DefaultTheme, css } from 'styled-components'
import { AlertBannerVariant } from './AlertBanner'

interface ContainerProps {
  variant: AlertBannerVariant
}

const alertBannerVariants = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success.light};
    color: ${theme.colors.success.main};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger.light};
    color: ${theme.colors.danger.main};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning.light};
    color: ${theme.colors.warning.main};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, variant }) => css`
    display: flex; // possibilita organizar em linha ou coluna
    align-items: center; //alinha no centro no eixo vertical
    gap: ${theme.spacings.xxsmall}; // espaço entre os elementos
    padding: 1.4rem; // espaço dentro do elemento
    width: 100%; // ocupa 100% da largura do elemento pai
    border-radius: ${theme.border.radius.default}; // arredonda as pontas
    margin-top: ${theme.spacings.small}; // espaço fora do elemento acima
    font-weight: ${theme.font.weight.normal}; // colocar em negrito

    svg {
      width: 2.4rem; //determina a largura dele
    }

    ${alertBannerVariants[variant](theme)}
  `}
`
