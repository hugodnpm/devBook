import { isAxiosError } from 'axios'
import { useState } from 'react'

interface UseError {
  error: string | null
  handleError: (error: unknown) => void
  clearError: () => void
}

export function useError(): UseError {
  const [error, setError] = useState<string | null>(null)

  const handleError = (error: unknown) => {
    if (
      isAxiosError(error) &&
      error.response?.status === 401 &&
      error.response.data.message === 'Invalid credentials'
    ) {
      setError('E-mail ou Senha Incorretos')
    } else {
      setError('Algo deu errado, tente novamente mais tarde!')
    }
  }

  const clearError = () => {
    setError(null)
  }
  return {
    error,
    handleError,
    clearError
  }
}
