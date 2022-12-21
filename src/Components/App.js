import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Adm/Admin";
import Cadastro from "./Cadastro/Cadastro";
import Desafio from "./Desafio/Desafio";
import LandingPage from "./LandingPage/LandingPage";
import Conta from "./MinhaConta/Conta";
import Playlist from "./PlaylistMateriais/Playlist";
import Ranking from "./Ranking/Ranking";
import Material from "./MateriaisExpandido/Material";
import Login from './Cadastro/Login'
import RecuperarSenha from './Cadastro/recuperarSenha'
import NewMaterial from "./Adm/NewMaterial/NewMaterial";
import NewDesafio from './Adm/NewDesafio/NewDesafio'
import Corrigir from "./Adm/Corrigir/Corrigir";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage/> }/>
		<Route path="/Desafio" element={ <Desafio/> }/>
		<Route path="/MateriaisExpandido" element={ <Material/> }/>
		<Route path="/MinhaConta" element={ <Conta/> }/>
		<Route path="/PlaylistMateriais" element={ <Playlist/> }/>
		<Route path="/Ranking" element={ <Ranking/> }/>
		<Route path="/Cadastro" element={ <Cadastro/>  }/>
		<Route path="/Login" element={ <Login/> } />
		<Route path='/EsqueciSenha' element={<RecuperarSenha/>}/>
		<Route path="/Adm" element={ <Admin/> }/>
		<Route path="/Corrigir" element={ <Corrigir/> }/>
		<Route path="/NewDesafio" element={ <NewDesafio/> }/>
		<Route path="/NewMaterial" element={ <NewMaterial/> }/>
      </Routes>
    </Router>
  );
}
