import { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'
import GlobalStyles from '../../styles/global'
import themeProject from '../../styles/theme'
import { Container, Content, PurchaseCard } from './style'

export function Dish() {
  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { handleAddDishToCart } = useCart()
  const params = useParams()
  const { user } = useAuth()
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`
  useEffect(() => {
    async function fetchDishDetail() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDishDetail()
  }, [])
  const increase = () => {
    if (quantity > 19) {
      alert('Erro: A quantidade máxima é de 20 unidades')
      return
    }
    setQuantity((count) => count + 1)
  }

  const decrease = () => {
    if (quantity < 2) {
      alert('Erro: A quantidade mínima é 1 unidade')
      return
    }
    setQuantity((count) => count - 1)
  }
  return (
    <ThemeProvider theme={themeProject}>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>
          <Link to="/">
            <ButtonText title="Voltar" icon={RiArrowLeftSLine} />
          </Link>
          {data && (
            <div id="page">
              <img src={imageURL} alt="Logo" />
              <div id="wrapperDesktop">
                <h1>{data.title}</h1>
                <h2>{data.description}</h2>
                <div id="tag">
                  {data.ingredients.map((ingredient) => (
                    <Tag key={ingredient.id} title={ingredient.name} />
                  ))}
                </div>

                {user.isAdmin ? (
                  <Link className="fullWidthLink" to={`/editdish/${data.id}`}>
                    <Button title="Editar Prato" />
                  </Link>
                ) : (
                  <PurchaseCard>
                    <div className="counter">
                      <ButtonText icon={FiMinus} onClick={decrease} />
                      <span>{quantity.toString().padStart(2, '0')}</span>
                      <ButtonText icon={FiPlus} onClick={increase} />
                    </div>

                    <Button
                      id="btnInclude"
                      title="incluir"
                      onClick={() =>
                        handleAddDishToCart(data, quantity, imageURL)
                      }
                      style={{ height: 32, width: 160, padding: '4px 0' }}
                    />
                  </PurchaseCard>
                )}
              </div>
            </div>
          )}
        </Content>
        <div id="footer">
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  )
}