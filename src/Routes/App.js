import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "../Pages/Admin";
import Cadastro from "../Pages/Cadastro";
import Login from '../Pages/Login'
import RecuperarSenha from '../Pages/RecuperarSenha'
import NewMaterial from "../Pages/NovoMaterial";
import NewDesafio from '../Pages/NovoDesafio'
import Corrigir from "../Pages/Corrigir";
import Desafio from "../Pages/Desafio";
import LandingPage from "../Pages/LandingPage";
import Material from "../Pages/Material";
import MinhaConta from "../Pages/Conta";
import Playlist from "../Pages/Playlist";
import Ranking from "../Pages/Ranking";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage/> }/>
		<Route path="/desafio" element={ <Desafio/> }/>
		<Route path="/materiais" element={ <Material/> }/>
		<Route path="/conta" element={ <MinhaConta/> }/>
		<Route path="/playlist" element={ <Playlist/> }/>
		<Route path="/ranking" element={ <Ranking/> }/>
		<Route path="/cadastro" element={ <Cadastro/>  }/>
		<Route path="/login" element={ <Login/> } />
		<Route path='/esqueciSenha' element={<RecuperarSenha/>}/>
		<Route path="/adm" element={ <Admin/> }/>
		<Route path="/corrigir" element={ <Corrigir/> }/>
		<Route path="/novoDesafio" element={ <NewDesafio/> }/>
		<Route path="/novoMaterial" element={ <NewMaterial/> }/>
      </Routes>
    </Router>
  );
}
