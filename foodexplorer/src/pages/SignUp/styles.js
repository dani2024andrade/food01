import styled from 'styled-components'
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    h1 {
      font-weight: bold;
      font-size: 4.2rem;
    }
    h2 {
      display: block;
      text-align: center;
      margin-bottom: 3.2rem;
      font-weight: 400;
      font-size: 3.2rem;
    }
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 7rem;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 4.2rem;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 31rem;
  input:focus {
    border: 2px solid white;
  }
  .inputs {
    margin-bottom: 3.2rem;
  }
  a {
    margin-top: 3.2rem;
    text-align: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  @media only screen and (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.5rem;
    width: 44rem;
    padding: 6.5rem;
  }
`
export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
`