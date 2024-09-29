import styled from 'styled-components'
export const Container = styled.div`
  #footer {
    width: 100%;
    bottom: 0;
    position: fixed;
  }
`
export const Content = styled.main`
  padding: 0 5%;
  margin-top: 11.6rem;

  img {
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.6rem;
  }
  #page,
  #wrapperDesktop {
    margin-top: 1.6rem;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;
    h1 {
      font-size: 2.7rem;
      font-weight: 300;
      margin-bottom: 2.4rem;
    }
    h2 {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 2.4rem;
    }
    .fullWidthLink {
      width: 100%;
    }
  }
  #tag {
    display: flex;
    gap: 1.4rem;
    margin-bottom: 5rem;
  }
  @media only screen and (min-width: 1024px) {
    #page {
      flex-direction: row;
      #wrapperDesktop {
        display: flex;
        align-items: flex-start;
        margin-left: 5rem;
      }
      .fullWidthLink {
        width: 13rem;
      }
    }
  }
`
export const PurchaseCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  button {
    height: 3.2rem;
    max-width: 24.6rem;
    white-space: nowrap;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    justify-content: center;
  }

  .counter span {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  p {
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};
    text-align: center;
  }
`