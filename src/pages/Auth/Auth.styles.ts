import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex; // possibilita organizar linha ou coluna
    justify-content: center; //centraliza no eixo horizontal
    align-items: center; // centraliza no eixo vertical
    padding: ${theme.spacings.large}; //espaço dentro do elemento
    height: 100vh; // determina altura 'vh' pega toda a tela
  `}
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex; // possibilita organizar em linha ou coluna
    flex-direction: column; // coloca um elemento embaixo do outro
    max-width: 50rem; // determina a largura máxima em 500px
    width: 100%; //ocupa 100% da largura de 500px

    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
export const LogoContainer = styled.div`
  position: absolute; // ele é removido do fluxo normal do documento e colocado em um local específico com base nas propriedades top, right, bottom, e left.
  top: 4rem;
  left: 4rem;
`
export const Heading = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    h1 {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`
export const InputContainer = styled.div`
  ${({ theme }) => css`
    & + & {
      // significa que quando tiver dois elementos iguais um apos o outro aplica o margin
      margin-top: ${theme.spacings.xsmall}; // espaço fora do elemento
    }
  `}
`
