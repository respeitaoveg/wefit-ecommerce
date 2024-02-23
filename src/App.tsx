import Header from "./layouts/Header"
import DefaultLayout from "./layouts/DefaultLayout";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, ContainerSpinner, Spinner } from "./assets/css/app.styles";


export default function App() {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(true)
  //   };
  //     window.addEventListener('load', handleLoad);

  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  setTimeout(() => {
    setLoading(false)
  }, 1500)

  return <>
    {loading
      ? <Container>
        <ContainerSpinner>
          <Spinner />
        </ContainerSpinner>
      </Container>
      : <Container>
        <Header />
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </Container>
    }
  </>


}