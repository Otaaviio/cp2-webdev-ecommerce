import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import App from "../App";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />, 
    children: [
      {        
        index: true, 
        element: <Home />,
      },
      {
        path: "carrinho",
        element: <Carrinho />
      },
      {
        path: "perfil",
        element: <Perfil />
      },
    ],
  },
]);