import React from "react";

export default function ModalCurso(props) {
  const nome = props.nome;
  const descricao = props.descricao;
  const ideal = props.ideal;
  const conteudo = props.conteudo;

  const gera = conteudo.map((item) => {
    return <li className="text-black">{item.value}</li>;
  });
  //nome, descricao, ideal, conteudo
  return (
    <div className="bg-branco flex w-4/5 rounded-3xl h-[40vh]">
      <div className="bg-verde w-[10vw] h-[10vw] rounded-full flex">
        <img src="playBtn.svg" alt="Play Button" className="mx-auto my-auto" />
      </div>

      <div className="bg-red-900">
        <h1>{nome}</h1>
        <p>{descricao}</p>
      </div>

      <div className="bg-yellow-300 w-1/4">
        <h1 className="text-verde text-base">{ideal}</h1>
        <ul className="">
          teste
          {gera}
        </ul>
      </div>
    </div>
  );
}
