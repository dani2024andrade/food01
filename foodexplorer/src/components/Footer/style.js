import styled from 'styled-components'
export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 0 5%;
  /* position: fixed; */
  bottom: 0;
  z-index: 999999;
  .logo {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
    }
    img {
      width: 2.2rem;
      height: 1.8rem;
    }
    @media only screen and (min-width: 1024px) {
      img {
        width: 3rem;
        height: 3rem;
      }
      span {
        font-size: 2.4rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    p {
      font-size: 1.4rem;
    }
  }
`