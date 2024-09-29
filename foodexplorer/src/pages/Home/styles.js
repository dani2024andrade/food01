// Seu arquivo JS (styles.js)
import styled from 'styled-components'
export const Container = styled.main`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 6.2rem;
    margin-bottom: 10.2rem;
    margin-left: 5%;
    margin-right: 5%;

    h3 {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 1.2rem;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Banner = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  margin: 14.5rem auto 6.2rem;

  border-radius: 0.3rem;
  background: linear-gradient(90deg, rgba(9, 30, 38, 0.27) 0%, #00131c 100%);
  width: 85%;
  max-width: 41.5rem;
  height: 12rem;
  @media only screen and (min-width: 1024px) {
    margin: 16.5rem auto;
    height: 26rem;
    max-width: 112rem;
  }

  img {
    position: absolute;
    left: -3rem;
    top: -3rem;
    width: 19.1rem;
    height: 15rem;
    @media only screen and (max-width: 356px) {
      width: 15rem;
      height: 15rem;
      left: -2rem;
      top: -3rem;
    }
    @media only screen and (min-width: 1024px) {
      left: -6rem;
      top: -4rem;
      width: 45rem;
      height: 30rem;
    }
  }

  .text {
    width: 15rem;
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
    @media only screen and (min-width: 425px) {
      h2 {
        font-size: 1.5rem;
      }
      width: 20rem;
    }
    @media only screen and (min-width: 1024px) {
      h2 {
        font-size: 4rem;
      }
      p {
        font-size: 1.6rem;
      }
      width: 48rem;
      margin-right: 3rem;
    }
  }
`