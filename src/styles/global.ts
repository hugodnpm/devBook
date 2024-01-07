import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0; // espaço fora do elemento
    padding: 0; //espaço dentro do elemento
    box-sizing: border-box; // considera todos os elementos para calcular o tamanho
 }

 #root, body {
    font: 16px Montserrat, sans-serif;
 }
`
