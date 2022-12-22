import ModalDesafio from "./ModalDesafio";

export default function GeraDesafio() {
  const desafioSemanal = {
    nome: "Desafio calculadora",
    descricao: "Objetivo: desenvolver uma calculadora web",
    requisitos: [
      { titulo: "Utilizar: HTML, CSS e JS;", id: 1 },
      { titulo: "Ambiente de desenvolvimento a critério do usuário;", id: 2 },
    ],
    pontos: 50,
    imagem: "calc.svg",
  };
  return (
    <div className="m-10 justify-evenly flex flex-wrap">
      <div className="text-4xl font-extrabold text-branco mb-5 w-[65vw]">
        Desafio da semana:
      </div>
      <ModalDesafio
        nome={desafioSemanal.nome}
        descricao={desafioSemanal.descricao}
        requisitos={desafioSemanal.requisitos}
        pontos={desafioSemanal.pontos}
        imagem={desafioSemanal.imagem}
      />
    </div>
  );
}
