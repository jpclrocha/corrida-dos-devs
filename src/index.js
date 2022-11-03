import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Components/LandingPage/Menu";
import Conteudo from "./Components/LandingPage/Conteudo";
import Ranking from "./Components/Ranking/Ranking";
import Conta from "./Components/MinhaConta/Conta";
import Material from "./Components/MateriaisExpandido/Material";
import Playlist from "./Components/PlaylistMateriais/Playlist";
import Desafio from "./Components/Desafio/Desafio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <Desafio/>
  </React.StrictMode>
);
