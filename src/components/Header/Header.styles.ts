import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.gray};
    background-color: #fff;
  `}
`

export const HeaderContainer = styled.div`
  max-width: 120rem;
  width: 100%; // lagura tela
  margin: 0 auto; // espaço fora do elemento
  display: flex; // possibilita organizar em linha ou coluna
  justify-content: space-between; // espaço entre elementos
  align-items: center; //alinha no centro no eixo vertical
  height: 7rem; // altura
  padding: 0 2rem; // espaço dentro do elemento de 0 cima e embaixo e 2 na esquerda e direita
`

export const NavContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    nav {
      margin-left: ${theme.spacings
        .medium}; // espaço fora do elemento a esquerda
    }

    a {
      margin: 0 ${theme.spacings.xsmall}; // espaço fora do elemento 0 cima e embaixo e xsmall direita e esquerda
      font-weight: ${theme.font.weight.normal};
      text-decoration: none; // retira o traço debaixo do link
      color: ${theme.colors.blue};
    }
  `}
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.primary};
    height: 4rem;
    width: 4rem;
    border-radius: ${theme.border.radius.small};
    cursor: pointer;
    color: #fff;

    span {
      font-weight: ${theme.font.weight.normal};
    }
  `}
`
