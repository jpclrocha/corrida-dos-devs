import Perfil from "./Perfil.js";
import Sobre from "./Sobre.js";
import Desafios from "./Desafios.js";
import Redes from "./Redes.js";
import Menu from "../LandingPage/Menu.js";

export default function Conta() {
  return (
    <>
      <Menu/>
      <div className="bg-verde h-36 shadow-xl w-full flex flex-wrap justify-evenly">
        <Perfil />
        <div className="w-fit h-[60vh] mt-[20vh]">
          <Sobre />
          <Desafios />
          <Redes />
        </div>
      </div>
    </>
  );
}
