import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import ListProducts from "./components/ListProducts/index.tsx";
import Cart from "./pages/Cart/index.tsx";
import Finished from "./pages/Finished/index.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListProducts />
      },
      {
        path: "cart",
        children: [
          {
            index: true,
            element: <Cart />,
          },
          {
            path: "finished",
            element: <Finished />,
          }
        ]
      }
    ]
  }

])