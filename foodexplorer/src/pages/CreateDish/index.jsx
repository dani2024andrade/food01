import { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global'
import themeProject from '../../styles/theme'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { IngredientsTag } from './../../components/IngredientsTag/index'
import { Container, Content, Form } from './styles'

export function CreateDish() {
  const [selectedFileName, setSelectedFileName] = useState('')

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  // Add and Remove Ingredients
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        'Erro: Você está tentando inserir um nome de ingrediente inválido!',
      )
    } else {
      setIngredients((prevState) => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)

  // Create New Dish Function
  async function handleNewDish() {
    if (!image) {
      return alert('Erro: Você não inseriu uma imagem para o prato!')
    }

    if (!title) {
      return alert('Erro: Você não informou o nome do prato!')
    }

    if (ingredients.length < 1) {
      return alert('Erro: Adicione pelo menos um ingrediente!')
    }

    if (newIngredient) {
      return alert(
        'Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!',
      )
    }

    if (!category) {
      return alert('Erro: Você não selecionou a categoria do prato!')
    }

    if (!price) {
      return alert('Erro: Você não informou o preço do prato!')
    }

    if (!description) {
      return alert('Erro: Você não informou uma descrição para o prato!')
    }

    setLoading(true)

    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('price', price)

    ingredients.map((ingredient) => formData.append('ingredients', ingredient))

    await api
      .post('/dishes', formData)
      .then(alert('Prato adicionado com sucesso!'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao criar o prato!')
        }
      })

    setLoading(false)
  }
  return (
    <ThemeProvider theme={themeProject}>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>
          <div id="header">
            <Link to="/">
              <ButtonText title="Voltar" icon={RiArrowLeftSLine} />
            </Link>
            <h1>Novo Prato</h1>
          </div>
          <Form>
            <div className="wrapperDesktop">
              <div className="sectionInput">
                <h2>Imagem do prato</h2>
                <label htmlFor="image">
                  <FiUpload size={24} />
                  <span>{selectedFileName || 'Selecione imagem'}</span>
                </label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0])
                    setSelectedFileName(e.target.files[0]?.name || '')
                  }}
                />
              </div>

              <div id="name" className="sectionInput">
                <h2>Nome do prato</h2>
                <Input
                  id="name"
                  placeholder="Ex.: Salada Caesar"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="sectionInput">
                <h2>Categoria</h2>
                <select
                  defaultValue={'default'}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="default" disabled>
                    Selecione a categoria
                  </option>
                  <option value="dishes">Pratos</option>
                  <option value="drinks">Bebidas</option>
                  <option value="dessert">Sobremesas</option>
                </select>
              </div>
            </div>
            <div className="wrapperDesktop">
              <div className="sectionInput">
                <h2>Ingredientes</h2>
                <div id="ingredient">
                  {ingredients.map((ingredient, index) => (
                    <IngredientsTag
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}

                  <IngredientsTag
                    isnew
                    placeholder="Adicionar"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </div>
              </div>
              <div id="price" className="sectionInput">
                <h2>Preço</h2>
                <Input
                  placeholder="R$ 00,00"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="sectionInput">
              <h2>Descrição</h2>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="styleButton">
              <Button title={'Salvar alterações'} onClick={handleNewDish} />
            </div>
          </Form>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}