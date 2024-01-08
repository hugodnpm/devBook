import styled, { css } from 'styled-components'

interface ContainerProps {
  error?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, error }) => css`
    display: flex; // possibilita organizar em linha ou coluna
    flex-direction: column; // organiza um embaixo do outro

    label {
      margin-bottom: ${theme.spacings
        .xxxsmall}; // espaço fora do elemento no fundo
    }

    input {
      height: 4.6rem; // determina a altura do elemento
      border-radius: ${theme.border.radius
        .default}; // arredonda as pontas da borda
      padding: ${theme.spacings.xxsmall}; // espaço dento do elemento
      font-size: ${theme.font.sizes.medium}; // determina o tamanho da letra
      border: 0.2rem solid; // determina a borda
      border-color: ${error
        ? theme.colors.danger.main
        : theme.colors.gray}; // determina a cor da borda
      outline: none; // retira a cor azul do foco
      transition: all 0.5s; // transição suave do foco

      &:focus {
        border: 0.2rem solid ${theme.colors.primary}; // Qnd clicar no input entra em foco e muda a cor da borda
      }
    }

    p {
      margin-top: ${theme.spacings.xxxsmall}; // espaço fora do elemento
      color: ${theme.colors.danger.main};
    }
  `}
`
