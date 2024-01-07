import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactHTMLParcer from 'react-html-parser'
import { googleBooksApi } from '../../services/googleBooksApi'
import {
  BackButton,
  Container,
  Content,
  Description,
  SpinnerContainer,
  SubTitle,
  Title
} from './BookDetail.styles'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'
import ArrowLeftIcon from '../../icons/arrow-left.svg?react'
import { Spinner } from '../../components/Spinner'

export interface BookState {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}

export function BookDetail() {
  const [book, setBook] = useState<BookState | null>(null)
  const params = useParams()
  const navigate = useNavigate()
  const { bookId } = params

  useEffect(() => {
    googleBooksApi
      .get(`/v1/volumes/${bookId}`)
      .then((response) => setBook(response.data))
  }, [bookId])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      {book ? (
        <>
          <BackButton onClick={handleGoBack}>
            <ArrowLeftIcon />
          </BackButton>
          <Thumbnail
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            size="large"
            bgColor="#ef552b"
          />
          <Content>
            <Title>{book.volumeInfo.title}</Title>
            <SubTitle>{book.volumeInfo.subtitle}</SubTitle>
            <Description>
              {ReactHTMLParcer(book.volumeInfo.description)}
            </Description>
          </Content>
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  )
}
