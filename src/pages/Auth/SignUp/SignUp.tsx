import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo'
import {
  Container,
  FormContainer,
  Heading,
  InputContainer,
  LogoContainer
} from '../Auth.styles'

export function SignUp() {
  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Heading>
          <h1>Cadastro-se de graça</h1>
          <p>
            Já tem uma conta?{' '}
            <Link color="secondary" to="/">
              Entrar
            </Link>{' '}
          </p>
        </Heading>
        <InputContainer>
          <Input id="name" label="Nome Completo" type="text" />
        </InputContainer>
        <InputContainer>
          <Input id="email" label="Email" type="email" />
        </InputContainer>
        <InputContainer>
          <Input id="password" label="Senha" type="password" />
        </InputContainer>
        <Button fullWidth={true}>Entrar</Button>
      </FormContainer>
    </Container>
  )
}
