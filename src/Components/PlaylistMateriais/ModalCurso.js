import React from "react";

export default function ModalCurso(props) {
  const nome = props.nome;
  const descricao = props.descricao;
  const ideal = props.ideal;
  const conteudo = props.conteudo;

  const gera = conteudo.map((item) => {
    return <li className="text-branco list-disc" key={item.id} >{item.titulo}</li>;
  });
  //nome, descricao, ideal, conteudo
  return (
    <div className="bg-branco flex w-4/5 rounded-3xl h-[35vh] justify-around items-center mb-10">
      <div className="ml-10 bg-verde w-[10vw] h-[10vw] rounded-full flex">
        <img src="playBtn.svg" alt="Play Button" className="mx-auto my-auto w-[256px]" />
      </div>

      <div className="h-fit p-10 mx-auto my-0">
        <h1 className="text-5xl text-verde font-extrabold">{nome}</h1>
        <div className="w-1/2">
          <p className="text-verde text-2xl">{descricao}</p>
        </div>
      </div>

      <div className="w-1/4 h-full p-5 mr-5">
        <h1 className="text-verde text-base mb-1 text-base">{ideal}</h1>
        <ul className="w-full h-fit bg-verde p-7 rounded-xl">
          {gera}
        </ul>
        <button className="bg-verde mt-5 w-full h-[5vh] text-branco rounded-xl">Iniciar jornada</button>
      </div>

    </div>
  );
}
