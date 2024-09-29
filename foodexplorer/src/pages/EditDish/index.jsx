import { useEffect, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global'
import themeProject from '../../styles/theme'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { IngredientsTag } from '../../components/IngredientsTag/index'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { Container, Content, Form } from './styles'

export function EditDish() {
  const navigate = useNavigate()

  const params = useParams()
  const [loadingDelete, setLoadingDelete] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [data, setData] = useState(null)

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`
  const [image, setImage] = useState(imageURL)
  const [imageFile, setImageFile] = useState(null)

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }
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

  // Update Dish Function
  async function handleUpdateDish() {
    if (!image) {
      return alert('Erro: Você não carregou a nova imagem do prato!')
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

    const formData = new FormData()
    formData.append('image', imageFile)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('price', price)

    ingredients.map((ingredient) => formData.append('ingredients', ingredient))

    await api
      .put(`/dishes/${params.id}`, formData)
      .then(alert('Prato atualizado com sucesso!'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao atualizar o prato!')
        }
      })
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)

      const { title, description, category, price, ingredients } = response.data
      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setIngredients(ingredients.map((ingredient) => ingredient.name))
    }

    fetchDish()
  }, [])

  // Remove Dish Function
  async function handleRemoveDish() {
    setLoadingDelete(true)
    const isConfirm = confirm('Tem certeza que deseja remover este item?')

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`).then(() => {
        alert('Item removido com sucesso!')
        navigate('/')
        setLoadingDelete(false)
      })
    }
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
            <h1>Editar Prato</h1>
          </div>
          <Form>
            <div className="wrapperDesktop">
              <div className="sectionInput">
                <h2>Imagem do prato</h2>
                <label htmlFor="image">
                  <FiUpload size={24} />
                  <span>
                    {(data && data.image) || 'Selecione imagem para alterá-la'}
                  </span>
                </label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
              </div>

              <div id="name" className="sectionInput">
                <h2>Nome do prato</h2>
                <Input
                  placeholder="Ex.: Salada Caesar"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="sectionInput">
                <h2>Categoria</h2>
                <select
                  value={category}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="sectionInput">
              <h2>Descrição</h2>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={description}
              />
            </div>
            <div className="styleButton">
              <Button title={'Salvar alterações'} onClick={handleUpdateDish} />
              <Button
                className="deleteButton"
                title={loadingDelete ? 'Excluindo prato' : 'Excluir prato'}
                onClick={handleRemoveDish}
                disabled={loadingDelete}
              />
            </div>
          </Form>
        </Content>
        <div id="footer">
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  )
}