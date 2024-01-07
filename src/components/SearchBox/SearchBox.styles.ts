import styled from 'styled-components'

export const Container = styled.div`
  display: flex; // dá a possibilidade de organizar em uma linha ou coluna
  align-items: center; //centralizar no eixo vertical
  border: 2px solid #d9d9d9; // cria uma borda
  border-radius: 10px; // arredonda as pontas da borda
  padding: 0 10px; //espaço dentro do elemento vertical/horizontal
  flex: 1; // preencha todo o espaço disponível em um determinado eixo (horizontal ou vertical) dentro do contêiner flexível.

  svg {
    height: 20px; // determina a altura
    width: 20px; // determina a largura
  }

  input {
    width: 100%; // determina a largura de 100% da div
    height: 46px; // determina a altura
    border: 0; // sem borda
    margin-left: 20px; // espaço fora do elemento - esquerdo
    outline: none; // quando clicar no input não marca
  }
`
