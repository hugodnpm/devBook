import styled from 'styled-components'

export const Container = styled.div`
  display: flex; // possibilita colocar os elemento em linha (lado a lado) ou coluna(um embaixo do outro)
  justify-content: center; // centraliza no eixo horizontal
  align-items: center; //centraliza no eixo vertical
  flex-direction: column; // coloca um embaixo do outro
  height: 100vh; //pega a altura toda da tela
  padding: 20px; // espaço dentro do elemento, todos os lados

  h1 {
    margin-bottom: 24px; // espaço fora do elemento
    color: #222;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex; // possibilita colocar os elemento em linha (lado a lado padrão) ou coluna(um embaixo do outro)
  align-items: center; //centraliza no eixo vertical
  max-width: 800px; // lagura máxima determinada
  width: 100%; // largura de 100% do 800px
`

export const SearchButton = styled.button`
  padding: 0 12px; // espaço dentr do elemento vertical/horizontal
  height: 48px; //altura
  border-radius: 32px; // arredonda as bordas
  background-color: #ef552b; // cor do fundo
  color: #fff; //cor das letras
  font-weight: bold; // negrito
  font-size: 14px; // tamanho da letra
  margin-left: 8px; //espaço fora do elemento na esquerda
  cursor: pointer; // mouse em forma de mão
  border: 0; // sem borda
  transition: 0.5s all; // transição com o hover

  &:hover {
    filter: brightness(90%); //quando colocar o mouse no botão diminui o brilho
  }
`
