import { ReactNode } from "react"
import Header from "./layouts/Header"
import styled from "styled-components";

interface AppProps {
  children: ReactNode
}

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

function App({ children }: AppProps) {
  return (
    <>
    <Container>
      <Header />
      {children}
    </Container>
    </>
  )
}

export default App
