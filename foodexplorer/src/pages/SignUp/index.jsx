import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { ThemeProvider } from 'styled-components'
import logoIcon from '../../assets/favicon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import GlobalStyles from '../../styles/global'
import themeProject from '../../styles/theme'
import { Container, Form, Label, Logo } from './styles'
export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSignUp() {
    if (!name || !email || !password) {
      return toast.error('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message)
        } else {
          toast.error('Não foi possível cadastrar')
        }
      })
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
          <h2>Crie sua conta</h2>
          <div className="inputs">
            <Label htmlFor="name">Seu nome</Label>
            <Input
              id="name"
              placeholder="Exemplo: Maria da Silva"
              type="text"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <Button title={'Criar conta'} onClick={handleSignUp} />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Container>
    </ThemeProvider>
  )
}