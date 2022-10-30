import React from "react";

export default function Modal({ aluno }) {
  return (
    <div className="bg-branco w-[70vw] h-28 rounded-full inline-flex mb-6 shadow-xl">
      <div className="bg-vermelho w-28 h-28 rounded-full">
        {/*<h1 className="text-white text-7xl self-center mx-auto">1°</h1> */}
      </div>

      <div className="self-center ml-6">
        <h1 className="text-2xl font-extrabold text-verde">Nome: {aluno.nome}</h1>
        <h2 className="text-xl font-extrabold text-verde">Turma: {aluno.turma}</h2>
      </div>

      <div className="self-center text-center absolute right-64">
        <h1 className="text-4xl font-extrabold text-verde">{aluno.pontuacao}</h1>
        <h2 className="text-2xl font-extrabold text-verde">Pontos</h2>
      </div>
    </div>
  );
}
