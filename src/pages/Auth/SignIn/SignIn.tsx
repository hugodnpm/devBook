import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo'

export function SignIn() {
  return (
    <div style={{ width: 600 }}>
      <Logo />
      <h1>Faça seu Login!</h1>
      <p>
        Não tem uma conta?{' '}
        <Link color="secondary" to="/">
          Cadastre-se
        </Link>{' '}
      </p>
      <Input
        id="email"
        label="Email"
        type="email"
        error="Email é Obrigatório"
      />
      <Input id="password" label="Senha" type="password" />
      <Button fullWidth={true}>Entrar</Button>
    </div>
  )
}
