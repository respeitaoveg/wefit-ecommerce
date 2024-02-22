import styled from "styled-components";

export const ContainerAddCartButton = styled.div< {$bgColor: boolean}>`
  background-color: ${props => props.$bgColor ? '#039B00' : '#009EDD'};
  color: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 4px;
  height: 40px;
  width: calc(100% - 16px);
  cursor: pointer;
`;

export const Description = styled.div`
  font-weight: 700;
  font-size: 12px;
`;

export const Counter =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;