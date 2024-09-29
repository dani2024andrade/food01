import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Content = styled.div`
  position: relative;

  width: 21rem;
  height: 29.2rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.65);

  background: rgba(0, 0, 0, 0.32);

  .favButton {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.LIGHT_300};
    font-size: 3rem;
  }

  .favButton svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .container {
    display: grid;
    text-align: center;
    align-items: center;
    .btnEdit {
      display: flex;
      justify-content: flex-end;
      padding-top: 1.6rem;
      padding-right: 1.6rem;
    }
    > img {
      width: 8.8rem;
      height: 8.8rem;
      margin: 2rem auto 1.2rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .product-title {
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 1.2rem;
    white-space: nowrap;
  }

  .description {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 1.6rem;
    height: 3.4rem;
  }

  .price {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`

export const PurchaseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-bottom: 1.6rem;
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