import { Link } from "react-router-dom";

export default function LoginModal() {
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
        <h1 className="mb-3"><a className="cursor-pointer font-bold"><Link to='/EsqueciSenha'>Esqueceu sua senha?</Link></a></h1>
        <button
          type="submit"
          className="bg-verde w-full rounded-lg h-[40px] text-branco mb-[20px]"
        >
          <Link to='/MinhaConta'>ENTRAR</Link>
        </button>
        <h1 className="text-center">Não tem conta? <a className="text-verde font-bold"><Link to='/Cadastro'>Criar conta</Link></a></h1>
      </form>
    </div>
  );
}
