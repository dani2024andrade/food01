import { styled } from 'styled-components'

export const Wrap = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  & svg {
    cursor: pointer;
  }
`