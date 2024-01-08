import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex; // possibilita organizar em linha ou coluna - padrão lado a lado
    align-items: center; // alinhamento centro no eixo vertical

    svg {
      height: 4rem; // determina a altura
      width: 4rem; // determina a largura
      color: ${theme.colors.secondary};
    }

    span {
      font-size: ${theme.font.sizes.xxlarge}; // determina o tamanho da letra
      font-weight: ${theme.font.weight.bold}; // coloca em negrito
      margin-left: ${theme.spacings
        .xxxxsmall}; // espaço fora do elemento a esquerda
    }
  `}
`
