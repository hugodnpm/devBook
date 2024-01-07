import { Container } from './Thumbnail.styles'
import NoThumbnailIcon from '../../icons/photo.svg?react'

interface ThumbnailProps {
  thumbnail?: string
  title: string
  size?: 'small' | 'large'
  bgColor: string
}

export function Thumbnail({
  bgColor,
  thumbnail,
  title,
  size = 'small'
}: ThumbnailProps) {
  return (
    <Container bgColor={bgColor} size={size}>
      {thumbnail ? <img src={thumbnail} alt={title} /> : <NoThumbnailIcon />}
    </Container>
  )
}
