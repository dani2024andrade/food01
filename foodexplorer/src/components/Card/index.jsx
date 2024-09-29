//= ===import styles====//
import { Container, Content, PurchaseCard } from './styles.js'

//= ===import components====//
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'

//= ===import hooks and API====//
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

//= ===import icons/images====//
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { MdEdit } from 'react-icons/md'
import imagePlaceholder from '../../assets/image-not-found-icon.svg'

export function Card({ data, ...rest }) {
  const { user } = useAuth()

  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder

  const { handleAddDishToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    if (quantity > 19) {
      alert('Erro: A quantidade máxima é de 20 unidades')
      return
    }
    setQuantity((count) => count + 1)
  }
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleFavorite = () => {
    setIsFavorited((prevState) => !prevState)
  }
  //= ===decrease quantity====//
  const decrease = () => {
    if (quantity < 2) {
      alert('Erro: A quantidade mínima é 1 unidade')
      return
    }
    setQuantity((count) => count - 1)
  }

  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <Content>
          <div className="container">
            <div className="btnEdit">
              <Link to={`/editDish/${data.id}`}>
                <MdEdit size={24} />
              </Link>
            </div>
            <img src={imageURL} alt="Imagem do prato" />
            <Link to={`/dish/${data.id}`}>
              <h3 className="product-title">
                {data.title}
                {' >'}
              </h3>
            </Link>
            <h1 className="price">R$ {data.price}</h1>
          </div>
        </Content>
      ) : (
        <Content>
          <button className="favButton" onClick={toggleFavorite}>
            {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>

          <div className="container">
            <img src={imageURL} alt="Imagem do prato" />
            <Link to={`/dish/${data.id}`}>
              <h3 className="product-title">
                {data.title}
                {' >'}{' '}
              </h3>
            </Link>

            <h1 className="price">R$ {data.price}</h1>

            <PurchaseCard>
              <div className="counter">
                <ButtonText icon={FiMinus} onClick={decrease} />
                <span>{quantity.toString().padStart(2, '0')}</span>
                <ButtonText icon={FiPlus} onClick={increase} />
              </div>

              <Button
                id="btnInclude"
                title="incluir"
                onClick={() => handleAddDishToCart(data, quantity, imageURL)}
                style={{ height: 32, width: 160, padding: '4px 0' }}
              />
            </PurchaseCard>
          </div>
        </Content>
      )}
    </Container>
  )
}