import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input/Input'

export function SignIn() {
  return (
    <div style={{ width: 600 }}>
      <h1>Faça seu Login!</h1>
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
