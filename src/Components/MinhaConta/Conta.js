import Perfil from "./Perfil.js";
import Sobre from "./Sobre.js";
import Desafios from "./Desafios.js";
import Redes from "./Redes.js";

export default function Conta() {
  return (
    <div className="bg-verde h-36 shadow-xl w-full">
      <Perfil />
      <Sobre />
      <Desafios />
      <Redes />
    </div>
  );
}
