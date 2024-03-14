import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBackground};
    padding-bottom: 6.4rem;
    height: 100%;
  `}
`

export const Main = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 6.4rem;
  padding: 0 2rem;
`
