import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import DefaultLayout from "./layouts/DefaultLayout/index.tsx";
import ListProducts from "./components/ListProducts/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <DefaultLayout>
        <ListProducts />
      </DefaultLayout>
    </App>
  }
])