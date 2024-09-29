import styled from 'styled-components'
export const Container = styled.div`
  h2 {
    margin-bottom: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
  @media only screen and (min-width: 1024px) {
    #footer {
      position: fixed;
      bottom: 0;
      width: 100vw;
    }
  }
`
export const Content = styled.main`
  padding: 0 5%;
  #header {
    margin-top: 11.1rem;
    margin-bottom: 2.4rem;
    button {
      margin-bottom: 2.4rem;
    }
    h1 {
      font-size: 3.2rem;
      font-weight: 500;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  input[type='file'] {
    display: none;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    border-radius: 0.8rem;
    padding: 0 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    span {
      margin-left: 0.8rem;
      font-size: 1.4rem;
    }
  }
  select {
    cursor: pointer;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
    height: 4.8rem;
    border-radius: 0.5rem;
    padding: 0 1.6rem;
  }
  #ingredient {
    display: flex;
    gap: 1.6rem;
    padding: 0.8rem;
    flex-wrap: wrap;
    border-radius: 0.8rem;
    height: auto;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
  .styleButton button {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    margin-bottom: 5rem;
  }
  .styleButton .deleteButton {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
  .styleButton {
    display: flex;
    gap: 3.2rem;
  }
  #name input,
  input[type='number'] {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
  .wrapperDesktop {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  @media only screen and (min-width: 1024px) {
    .wrapperDesktop {
      flex-direction: row;
      gap: 3.2rem;
      width: 100%;
    }
    .sectionInput {
      width: 100%;
    }
    #price {
      width: 25rem;
    }
    .styleButton button {
      width: 17rem;
    }
    .styleButton {
      display: flex;
      justify-content: end;
      margin-bottom: 0;
    }
  }
`