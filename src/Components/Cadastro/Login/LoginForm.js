import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="bg-branco w-[30vw] h-fit p-10 rounded-lg ">
      <form>
        <h1>Email:</h1>
        <input
          type="text"
          placeholder="digite seu email aqui"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <h1>Senha:</h1>
        <input
          type="password"
          placeholder="digite sua senha aqui"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <h1 className="mb-3 cursor-pointer font-bold">
          <Link to="/esqueciSenha">Esqueceu sua senha?</Link>
        </h1>
        <Link to="/conta">
          <button
            type="submit"
            className="bg-verde w-full rounded-lg h-[40px] text-branco mb-[20px]"
          >
            ENTRAR
          </button>
        </Link>

        <h1 className="text-center">
          Não tem conta?{" "}
          <Link to="/cadastro" className="text-verde font-bold">
            Criar conta
          </Link>
        </h1>
      </form>
    </div>
  );
}
