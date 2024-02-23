import styled from "styled-components"

export const CartContainer = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 4px;
  padding: 64px;
`

export const Title = styled.div`
  color: #2F2E41;
  font-size: 20px;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 200px;
    text-align: center;
  }
`