import { Container } from './AlertBanner.styles'
import ExclamationCircleIcon from '../../icons/exclamation-circle.svg?react'
import ExclamationTriangleIcon from '../../icons/exclamation-triangle.svg?react'
import CheckCircleIcon from '../../icons/check-circle.svg?react'

export type AlertBannerVariant = 'success' | 'error' | 'warning'

interface AlertBannerProps {
  variant?: AlertBannerVariant
  message: string
}

const icons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon
}

export function AlertBanner({
  variant = 'success',
  message
}: AlertBannerProps) {
  const Icon = icons[variant]
  return (
    <Container variant={variant}>
      <Icon />
      {message}
    </Container>
  )
}
