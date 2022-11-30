import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Components/LandingPage/Menu";
import Conteudo from "./Components/LandingPage/Conteudo";
import Ranking from "./Components/Ranking/Ranking";
import Conta from "./Components/MinhaConta/Conta";
import Material from "./Components/MateriaisExpandido/Material";
import Playlist from "./Components/PlaylistMateriais/Playlist";
import Desafio from "./Components/Desafio/Desafio";
import RecuperarSenha from "./Components/Cadastro/recuperarSenha";
import Login from "./Components/Cadastro/Login";
import Cadastro from "./Components/Cadastro/Cadastro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cadastro/>
  </React.StrictMode>
);
