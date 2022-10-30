import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Components/LandingPage/Menu";
import Conteudo from "./Components/LandingPage/Conteudo";
import Ranking from "./Components/Ranking/Ranking";
import Conta from "./Components/MinhaConta/Conta";
import Material from "./Components/MateriaisExpandido/Material";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <Material/>
  </React.StrictMode>
);
