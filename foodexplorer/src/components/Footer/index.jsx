import logogray from '../../assets/iconfooter.svg'
import { Container } from './styles'
export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={logogray} alt="" />
        <span>food explorer</span>
      </div>
      <p>© 2022 - Todos os direitos reservados.</p>
    </Container>
  )
}