import ModalDesafio from "./ModalDesafio";

export default function Desafio() {
  return (
    <div className="m-10 justify-evenly flex flex-wrap">
        <div className="text-4xl font-extrabold text-branco mb-5 w-[90vw]">Desafio da semana:</div>
        <ModalDesafio/>
    </div>
  )
}
