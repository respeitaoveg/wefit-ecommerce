import styled from "styled-components";

export const DefaultContainer = styled.div`
  margin-top: 28px;
  margin-bottom: 76px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0 16px 16px 16px;
    margin: 0;
    height: calc(100% - 80px);
  }
`;