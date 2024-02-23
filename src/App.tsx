import Header from "./layouts/Header"
import styled from "styled-components";
import DefaultLayout from "./layouts/DefaultLayout";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100vh;
  }
`;

export default function App() {
  return <Container>
    <Header />
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  </Container>
}