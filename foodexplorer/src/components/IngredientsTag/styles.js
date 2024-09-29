import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 13rem;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  border: ${({ theme, isnew }) =>
    isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  background-color: ${({ theme, isnew }) =>
    isnew ? 'transparent' : `${theme.COLORS.LIGHT_600}`};

  svg {
    vertical-align: middle;
  }

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    max-width: 9rem;
    height: 2.8rem;

    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`