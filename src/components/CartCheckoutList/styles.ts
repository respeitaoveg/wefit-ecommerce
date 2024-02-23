import styled from "styled-components"

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px;
  align-items: start;
`

export const HeaderText = styled.div`
  color: #999999;
  font-weight: 700;
  font-size: 14px;
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    gap: 16px;
    align-items: normal;
  }
`
export const TrashAction = styled.div`
  cursor: pointer;
`

export const CartCheckoutListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
`