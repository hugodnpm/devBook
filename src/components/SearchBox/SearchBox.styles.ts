import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex; // possibilita organizar em linha ou coluna
    align-items: center; //alinha no centro no eixo vertical
    border: 0.1rem solid ${theme.colors.gray}; // cria uma borda
    border-radius: 0 1rem; // arredonda O raio do canto superior esquerdo e do canto inferior direito é 0.O raio do canto superior direito e do canto inferior esquerdo é de 1 rem.
    padding: 0 1rem; // espaço dentro do elemento superior e inferior 0 e dir e esq 1rem
    flex: 1; // item deve expandir para ocupar todo o espaço disponível dentro do contêiner flexível

    svg {
      height: 2rem; // define a altura
      width: 2rem; // define a largura
    }

    input {
      width: 100%; // define a largura
      height: 3.6rem; // define a altura
      border: none; // sem borda
      margin-left: 1.2rem; //espaço fora do elemento na esquerda
      outline: none; // retira ma linha ao redor de um elemento, geralmente para destacá-lo visualmente.
    }
  `}
`
