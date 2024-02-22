import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import DefaultLayout from "./layouts/DefaultLayout/index.tsx";
import ListProducts from "./components/ListProducts/index.tsx";
import Cart from "./pages/Cart/index.tsx";
import Finished from "./pages/Finished/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <DefaultLayout>
        <ListProducts />
      </DefaultLayout>
    </App>
  },
  {
    path: "cart",
    children: [
      {
        index: true,
        element: <App>
        <DefaultLayout>
          <Cart />
        </DefaultLayout>
      </App>,
      },
      {
        path: "finished",
        element: <App>
          <DefaultLayout>
            <Finished />
          </DefaultLayout>
        </App>,
      }
    ]
  },

])