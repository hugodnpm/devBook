import { createGlobalStyle, css } from 'styled-components'
//Template Literals = 1.6 rem = 16px, 1rem = 10px, 0.1rem = 1px
export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0; // espaço fora do elemento
    padding: 0; //espaço dentro do elemento
    box-sizing: border-box; // considera todos os elementos para calcular o tamanho
 }

 ${({ theme }) => css`
   html {
     font-size: 62.5%;
   }

   #root,
   body {
     font: 1.6rem ${theme.font.family};
   }
 `}

`
