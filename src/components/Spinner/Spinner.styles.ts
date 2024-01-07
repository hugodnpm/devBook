import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

export const Spinner = styled.div`
  width: 48px; // determina a largura
  height: 48px; // determina a altura
  border: 5px solid #fff; // define uma borda com largura da borda, tipo linha e branca
  border-bottom-color: #e3552b; // cor da borda
  border-radius: 50%; // arredonda as pontas
  animation: ${rotation} 1s linear infinite;
`
