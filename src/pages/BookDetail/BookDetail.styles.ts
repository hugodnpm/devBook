import styled from 'styled-components'

export const Container = styled.div`
  display: flex; // organizar em linha ou coluna
  height: 100%; // detemina a altura toda
  width: 100%; // detemina a largura toda

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const BackButton = styled.button`
  background-color: transparent; // cor do fundo
  border: 0; // sem borda
  outline: 0; //tira a linha embaixo da letra
  height: 46px; // determina a altura
  width: 46px; // determina a largura
  cursor: pointer; // ponteiro do mouse vira uma mão
  position: fixed; //fixa o botão num lugar e fica lá mesmo com o scrool da página
  left: 20px;
  top: 20px;

  @media (max-width: 1024px) {
    width: 32px;
    height: 32px;
    left: 12px;
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    left: 8px;
  }
`

export const Content = styled.div`
  display: flex; // possibilita organizar em linha ou coluna
  flex-direction: column; // organiza um embaixo do outro
  height: 100vh; // ocupa toda a altura da tela
  width: 50%;
  padding: 48px; // espaço dentro do elemento
  overflow-y: scroll; // inserir barra de rolagem

  @media (max-width: 768px) {
    width: 100%;
    overflow-y: inherit;
  }
`
export const Title = styled.h1`
  font-size: 54px; // define o tamanho da letra
  margin-bottom: 16px; // espaço fora do elemento no fundo

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`
export const SubTitle = styled.h2`
  font-weight: normal; // não negrito
  font-size: 36px; // define tamanho da letra
  margin-bottom: 16px; // espaço fora do elemento no fundo

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`
export const Description = styled.p`
  font-size: 18px; // define tamanho da letra
  margin-bottom: 16px; // espaço fora do elemento no fundo

  @media (max-width: 768px), (max-width: 1024px) {
    font-size: 14px;
  }
`
export const SpinnerContainer = styled.div`
  display: flex; // possibilita organizar em linha ou coluna
  justify-content: center; // centraliza no eixo horizontal
  margin-top: 60px; // espaço fora do elemento em cima
  width: 100%; // largura de 100% da div
`
