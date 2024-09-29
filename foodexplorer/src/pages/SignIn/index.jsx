import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import logoIcon from '../../assets/favicon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import GlobalStyles from '../../styles/global'
import themeProject from '../../styles/theme'
import { Container, Form, Label, Logo } from './styles'
export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
  return (
    <ThemeProvider theme={themeProject}>
      <GlobalStyles />
      <Container>
        <Logo>
          <img src={logoIcon} alt="Logo da empresa" />
          <h1>food explorer</h1>
        </Logo>
        <Form>
          <h2>Faça login</h2>
          <div className="inputs">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="exemplo@exemplo.com.br"
              type="text"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputs">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button title={'Entrar'} onClick={handleSignIn} />
          <Link to="/register">Criar conta</Link>
        </Form>
      </Container>
    </ThemeProvider>
  )
}