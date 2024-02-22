import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Default from "./layouts/Default/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App>
      <Default>
        <div>teste</div>
      </Default>
    </App>
  }
])