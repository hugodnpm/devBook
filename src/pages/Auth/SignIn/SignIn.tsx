import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input/'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo'
import {
  Container,
  FormContainer,
  Heading,
  InputContainer,
  LogoContainer
} from '../Auth.styles'
import { useAuth } from '../../../hooks/useAuth'
import { AlertBanner } from '../../../components/AlertBanner'
import { useState } from 'react'
import { isAxiosError } from 'axios'
import { useError } from '../../../hooks/useError'

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email é obrigatório' })
    .email({ message: 'insira um E-mail Válido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
})

type SignInForm = z.infer<typeof validationSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInForm>({
    resolver: zodResolver(validationSchema)
  })
  const { signIn } = useAuth()
  const { error, handleError, clearError } = useError()

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    try {
      clearError()
      await signIn(data)
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Heading>
          <h1>Faça seu Login</h1>
          <p>
            Não tem uma conta?{' '}
            <Link color="secondary" to="/cadastro">
              Cadastre-se
            </Link>{' '}
          </p>
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              id="email"
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </InputContainer>
          <InputContainer>
            <Input
              id="password"
              label="Senha"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </InputContainer>
          <Button fullWidth={true}>Entrar</Button>
          {error && <AlertBanner variant="error" message={error} />}
        </form>
      </FormContainer>
    </Container>
  )
}
