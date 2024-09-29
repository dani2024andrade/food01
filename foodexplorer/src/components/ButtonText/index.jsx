import { Container } from './styles'

export function ButtonText({ icon: Icon, title, iconSize, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={iconSize || 34} />}
      {title}
    </Container>
  )
}