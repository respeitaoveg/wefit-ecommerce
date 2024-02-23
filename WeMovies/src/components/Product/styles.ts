import styled from "styled-components";

export const ContainerProduct = styled.div`
  background-color: #FFF;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px 11px;
  border-radius: 4px;
  max-width: 300px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 100%;
  }
`;

export const ContainerProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ContainerProductDetailImageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ProductTitle = styled.div`
color: #333333;
font-weight: 700;
font-size: 12px;
`;

export const ProductPrice = styled.div`
color: #2F2E41;
font-weight: 700;
font-size: 16px;
`;