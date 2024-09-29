import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import imgBanner from '../../assets/imgPrincipal.png'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer/index'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import GlobalStyles from '../../styles/global'
import themeProject from '../../styles/theme'
import { Banner, Container } from './styles'

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`)
      setDishes(response.data)
    }
    fetchDishes()
  }, [search])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const [swiperLoaded, setSwiperLoaded] = useState(false)
  useEffect(() => {
    if (windowWidth >= 1024 && !swiperLoaded) {
      setSwiperLoaded(true)
    }
  }, [windowWidth, swiperLoaded])
  const slidesPerViewSettings = {
    320: { slidesPerView: 1.3 },
    375: { slidesPerView: 1.5 },
    425: { slidesPerView: 1.6 },
    768: { slidesPerView: 3.1 },
    1024: { slidesPerView: 4 },
    1440: { slidesPerView: 6 },
  }
  return (
    <ThemeProvider theme={themeProject}>
      <GlobalStyles />
      <Container>
        <Header />
        <Banner>
          <div className="img">
            <img src={imgBanner} alt="imagem do bannner" />
          </div>
          <div className="text">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>
        <div className="cards">
          <div>
            <h3>Pratos principais</h3>

            {dishes.filter((dish) => dish.category === 'dishes').length > 0 && (
              <Swiper
                className="mySwiper"
                breakpoints={slidesPerViewSettings}
                navigation={windowWidth >= 1024}
                loop={true}
              >
                {dishes
                  .filter((dish) => dish.category === 'dishes')
                  .map((item, index) => (
                    <SwiperSlide key={String(index)}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
          <div>
            <h3>Sobremesas</h3>

            {dishes.filter((dish) => dish.category === 'dessert').length >
              0 && (
              <Swiper
                className="mySwiper"
                breakpoints={slidesPerViewSettings}
                navigation={windowWidth >= 1024}
                loop={true}
              >
                {dishes
                  .filter((dish) => dish.category === 'dessert')
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <Card data={dish} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
          <div>
            <h3>Bebidas</h3>

            {dishes.filter((dish) => dish.category === 'drinks').length > 0 && (
              <Swiper
                className="mySwiper"
                breakpoints={slidesPerViewSettings}
                navigation={windowWidth >= 1024}
                loop={true}
              >
                {dishes
                  .filter((dish) => dish.category === 'drinks')
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <Card data={dish} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}