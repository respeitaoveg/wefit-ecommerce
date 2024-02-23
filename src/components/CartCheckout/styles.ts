import styled from "styled-components"

export const CartCheckoutContainer = styled.div`
  color: black;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  padding: 24px;
  max-width: calc(950px - 48px);

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 16px;
  }
`