import styled, { css } from 'styled-components'

interface ContainerProps {
  bgColor: string
  size: 'small' | 'large'
}

const containerCustomStyles = {
  small: () => css`
    height: 300px;
    width: 100%;
    border-radius: 4px;

    svg {
      width: 120px;
      color: #fff;
    }
  `,
  large: () => css`
    height: 100vh;
    width: 50%;

    svg {
      width: 300px;
      color: #fff;
    }

    @media (max-width: 768px) {
      height: 400px;
      width: 100%;

      svg {
        width: 120px;
      }
    }
  `
}

const imageCustomStyles = {
  small: () => css`
    width: 120px;
  `,
  large: () => css`
    width: 50%;

    @media (max-width: 768px) {
      width: 180px;
    }
  `
}

export const Container = styled.div<ContainerProps>`
  display: flex; //organizar itens em lonha ou colunas
  justify-content: center; // centraliza no eixo horizontal
  align-items: center; // centraliza no eixo vertical
  background-color: ${(props) => props.bgColor}; //funçao para receber a cor
  transition: 0.5s all;

  ${(props) => containerCustomStyles[props.size]}

  img {
    ${(props) => imageCustomStyles[props.size]}
  }
`
