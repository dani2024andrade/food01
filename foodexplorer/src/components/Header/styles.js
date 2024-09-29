import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  z-index: 999999;
`
export const Content = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2.8rem;
  justify-content: space-between;
  #inputMobile {
    position: relative;
  }
  #listDish {
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    ul {
      list-style: none;
      li {
        padding: 1rem;
        margin-left: 1rem;
      }
    }
  }
  #logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    h1 {
      font-size: 2.4rem;
    }
  }
  #logoAdmin {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    p {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
  #cartDesktop {
    display: flex;
    align-items: center;
    padding: 1.5rem 4.5rem;
    border-radius: 5px;
    gap: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
  #logoIcon {
    width: 2.5rem;
    height: 2.5rem;
  }
  .bar {
    cursor: pointer;
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;

    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  #cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.2rem;
    height: 4.2rem;
  }
  #counterCart {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99999px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .nav-menu {
    display: none;
  }
  .nav-menu.active {
    animation: animacaoEsquerdaParaDireita 0.4s ease-in-out;
    display: block;
    width: 100vw;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    position: fixed;
    top: 10rem;
    left: 0;
    #inputMobile {
      margin: 3.6rem 2.8rem;
    }
  }
  #footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
  @keyframes animacaoEsquerdaParaDireita {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }
  @media only screen and (max-width: 1023px) {
    #cartDesktop {
      display: none;
    }
  }
  @media only screen and (min-width: 1023px) {
    gap: 3.2rem;
    .hamburger,
    #cart {
      display: none;
    }
    #logoAdmin {
      display: block;
      text-align: end;
    }
    #logoIcon {
      width: 4rem;
      height: 4rem;
    }
  }
`
export const Search = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  width: 40%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  input {
    width: 34rem;
    height: 4.8rem;

    padding: 1.4rem;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    background: transparent;
  }

  label {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`
export const BtnLogout = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`
export const Logout = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-weight: 300;
  font-size: 2.4rem;
  display: block;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  margin: 3.6rem 2.8rem;
`
export const CreateDish = styled(Link)`
  button {
    padding-left: 7rem;
    padding-right: 7rem;
  }
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`
export const NewDish = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-weight: 300;
  font-size: 2.4rem;
  display: block;
  text-align: start;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  margin-top: 3.6rem;
  margin: 3.6rem 2.8rem;
`
export const LinkList = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`