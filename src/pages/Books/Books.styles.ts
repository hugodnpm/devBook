import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex; //pode organizar em linhas ou colunas
  flex-direction: column; // organiza o elemento um embaixo do outro
  align-items: center; // centraliza no eixo vertical
  padding: 0 20px 40px; // espaço dentro do elemento top/direito e Esquerda/embaixo
  width: 100%;

  h1 {
    margin: 24px 0; //espaço fora do elemento vertical / horizontal
    color: #222;
  }

  ul {
    display: grid; // colunas do excel
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    ); // coloca a quantidade de colunas de forma dinamica com no maximo a lagura da coluna 1fr e no minimo 250px
    max-width: 1200px; //lagura máxima
    width: 100%; // ocupa 100% do 1200
    grid-gap: 16px; // espaço entre os grid
    list-style: none; // retira o ponto da lista
  }

  li {
    &:hover {
      div {
        background-color: #ef552b;
      }
    }
  }

  a {
    text-decoration: none; // retira a linha azul quando tem link
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`
const clampText = css`
  // para limitar a 2 linhas e o que passar aparece ...
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Title = styled.h2`
  font-size: 24px; // tamanho da letra
  margin-top: 16px; // espaço fora do elemento acima
  margin-bottom: 8px; // espaço fora do elemento fundo
  color: #222; // cor da letra

  ${clampText}
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const SubTitle = styled.h3`
  font-weight: normal; // sem ser negrito
  font-size: 16px; //tamanho da letra
  color: #222; // cor da letra

  ${clampText}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
