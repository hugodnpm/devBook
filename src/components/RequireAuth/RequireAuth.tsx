import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface RequireAuthprops {
  children: JSX.Element
}
export function RequireAuth({ children }: RequireAuthprops) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}
