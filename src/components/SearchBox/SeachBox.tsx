import { InputHTMLAttributes } from 'react'
import { Container } from './SearchBox.styles'
import SearchIcon from '../../icons/search.svg?react'

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBox(props: SearchBoxProps) {
  return (
    <Container>
      <SearchIcon />
      <input placeholder="Encontre seu livro Favorito" {...props} />
    </Container>
  )
}
