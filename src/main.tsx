import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Turno from "./Paginas/Cadastro/Turno/Turno.tsx";
import TurnoGrade from "./Paginas/Cadastro/Turno/TurnoGrade.tsx";
import MenuPrincipal from "./Paginas/Menu/MenuPrincipal.tsx";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <MenuPrincipal />,
  },
  {
    path: "Turno",
    element: <Turno />,
  },
  {
    path: "TurnoGrade",
    element: <TurnoGrade />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
