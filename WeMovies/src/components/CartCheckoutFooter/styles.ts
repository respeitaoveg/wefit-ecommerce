import styled from "styled-components";

export const CartCheckoutFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 21px;
  }
`