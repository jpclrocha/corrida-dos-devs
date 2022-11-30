import React from "react";

export default function CadastroModal() {
  return (
    <div className="bg-branco w-[30vw] h-fit p-10 rounded-lg ">
      <form>
        <h1>Nome Completo:</h1>
        <input
          type="text"
          placeholder="digite seu nome completo"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <h1>Digite seu email:</h1>
        <input
          type="text"
          placeholder="digite seu email aqui"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <h1>Digite uma senha:</h1>
        <input
          type="password"
          placeholder="digite sua senha aqui"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />

        <h1>Digite sua senha novamente:</h1>
        <input
          type="password"
          placeholder="confirme sua senha"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />

        <button
          type="submit"
          className="bg-verde w-full rounded-lg h-[40px] text-branco mb-[20px]"
        >
          Cadastrar
        </button>
        <h1 className="text-center">
          Já tem conta? <a className="text-verde font-bold">Entrar</a>
        </h1>
      </form>
    </div>
  );
}
