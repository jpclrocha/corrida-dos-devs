import { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroForm(props) {

  const initUser = {id:null, name:"", email:"", password:""}

  const [user, setUser] = useState(initUser)

  const handleChange = e =>{
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(user.name && user.email){
      handleChange(e, props.addUser(user))
    }
  }

  return (
    <div className="bg-branco w-[30vw] h-fit p-10 rounded-lg ">
      <form>
        <h1>Nome Completo:</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="digite seu nome completo"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <h1>Digite seu email:</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="digite seu email aqui"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <h1>Digite uma senha:</h1>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="digite sua senha aqui"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />

        <h1>Digite sua senha novamente:</h1>
        <input
          type="password"
          placeholder="confirme sua senha"
          className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
        />
        <Link to="conta">
          <button
            type="submit"
            className="bg-verde w-full rounded-lg h-[40px] text-branco mb-[20px]"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        </Link>
        <h1 className="text-center">
          Já tem conta?{" "}
          <Link to="/login" className="text-verde font-bold">
            Entrar
          </Link>
        </h1>
      </form>
    </div>
  );
}
