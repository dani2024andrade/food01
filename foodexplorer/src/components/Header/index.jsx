import { useEffect, useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart.svg'
import logoIcon from '../../assets/favicon.svg'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'
import { Button } from '../Button'
import { Input } from '../Input'

import { Footer } from '../Footer'
import {
  BtnLogout,
  Container,
  Content,
  CreateDish,
  LinkList,
  Logout,
  NewDish,
  Search,
} from './styles'

export function Header() {
  const { user } = useAuth()
  const { signOut } = useAuth()
  const [searchValue, setSearchValue] = useState('')
  const [dishes, setDishes] = useState([])

  const { cart } = useCart()
  function mobileMenu() {
    document.getElementById('hamburger').classList.toggle('active')
    document.getElementById('nav-menu').classList.toggle('active')
    setSearchValue('')
  }
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  // eslint-disable-next-line no-extend-native
  String.prototype.removerAcentos = function () {
    return this.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  useEffect(() => {
    async function updateSearch() {
      if (searchValue === '') {
        setDishes([])
        return
      }

      const response = await api.get(`/dishes?title`)

      const searchTerm = searchValue.toLowerCase()
      const filteredData = response.data.filter((item) => {
        const titleMatch = [
          item.title.toLowerCase().removerAcentos().includes(searchTerm) ||
            item.ingredients.some((ingredient) =>
              ingredient.name
                .toLowerCase()
                .removerAcentos()
                .includes(searchTerm),
            ),
        ]

        return titleMatch[0]
      })

      const dishFilter = filteredData != null ? filteredData : []
      setDishes(dishFilter)
    }
    updateSearch()
  }, [searchValue])
  return (
    <Container>
      {user.isAdmin ? (
        <Content>
          <div className="hamburger" id="hamburger" onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div id="logo">
            <img id="logoIcon" src={logoIcon} alt="Logomarca da empresa" />
            <div id="logoAdmin">
              <h1>food explorer</h1>
              <p>admin</p>
            </div>
          </div>
          <Search>
            <label>
              <IoIosSearch size={24} />
              <div id="inputMobile">
                <input
                  type="text"
                  placeholder="Busque pelas opções de pratos"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <div id="listDish">
                  <ul>
                    {dishes.map((item, index) => (
                      <li key={index}>
                        <LinkList to={`/dish/${item.id}`}>
                          {item.title}
                        </LinkList>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </label>
          </Search>
          <CreateDish to="/createdish">
            <Button title={'Novo prato'} />
          </CreateDish>
          <div id="cart"></div>
          <BtnLogout to="/" onClick={signOut}>
            <FiLogOut size={32} />
          </BtnLogout>
          <div className="nav-menu" id="nav-menu">
            <div id="inputMobile">
              <Input
                icon={IoIosSearch}
                placeholder={'Busque por pratos ou ingrediente'}
                value={searchValue}
                onChange={handleSearchChange}
              />
              <div id="listDish">
                <ul>
                  {dishes.map((item, index) => (
                    <li key={index}>
                      <LinkList to={`/dish/${item.id}`}>{item.title}</LinkList>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link to="/createdish">
              <NewDish>
                <span>Novo prato</span>
              </NewDish>
            </Link>
            <Logout to="/" onClick={signOut}>
              <span>Sair</span>
            </Logout>
            <div id="footer">
              <Footer />
            </div>
          </div>
        </Content>
      ) : (
        <Content>
          <div className="hamburger" id="hamburger" onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div id="logo">
            <img id="logoIcon" src={logoIcon} alt="Logomarca da empresa" />
            <h1>food explorer</h1>
          </div>
          <Search>
            <label>
              <IoIosSearch size={24} />
              <div id="inputMobile">
                <input
                  type="text"
                  placeholder="Busque pelas opções de pratos"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <div id="listDish">
                  <ul>
                    {dishes.map((item, index) => (
                      <li key={index}>
                        <LinkList to={`/dish/${item.id}`}>
                          {item.title}
                        </LinkList>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </label>
          </Search>
          <div id="cartDesktop">
            <img src={cartIcon} alt="icon do carrinho de compras" />
            <span>Pedidos ({cart.length})</span>
          </div>
          <div id="cart">
            <div id="imgCart">
              <img src={cartIcon} alt="icon do carrinho de compras" />
            </div>
            <div id="counterCart">
              <span>{cart.length}</span>
            </div>
          </div>
          <BtnLogout to="/" onClick={signOut}>
            <FiLogOut size={32} />
          </BtnLogout>
          <div className="nav-menu" id="nav-menu">
            <div id="inputMobile">
              <Input
                icon={IoIosSearch}
                placeholder={'Busque por pratos ou ingrediente'}
                value={searchValue}
                onChange={handleSearchChange}
              />
              <div id="listDish">
                <ul>
                  {dishes.map((item, index) => (
                    <li key={index}>
                      <LinkList to={`/dish/${item.id}`}>{item.title}</LinkList>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Logout to="/" onClick={signOut}>
              <span>Sair</span>
            </Logout>
          </div>
        </Content>
      )}
    </Container>
  )
}