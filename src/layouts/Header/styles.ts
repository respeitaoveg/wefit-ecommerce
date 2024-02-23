import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 38px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: auto;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;