import { Link } from "react-router-dom";

export default function AdminMenu() {
  return (
    <nav className="w-[97vw] h-24 py-5 inline-flex justify-between items-center text-branco">
      <h1 className="inline-flex text-4xl font-sans font-bold h-fit ml-[5%]">
        <Link to="/" className="inline-flex">
          <img
            src="logoBranca.svg"
            alt="Corrida-dos-devs-logo"
            className="pr-2"
          />
          Olá, fulan@
        </Link>
      </h1>
      <ul className="inline-flex w-1/2 justify-evenly object-right">
        <Link to="/adm">
          <li className="text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/ranking">
          <li className="text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer ">
            Ranking
          </li>
        </Link>
        <Link to="/playlist">
          <li className="text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer ">
            Materiais
          </li>
        </Link>
        <Link to="/conta">
          <li className="text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer bg-verde">
            Conta
          </li>
        </Link>
      </ul>
    </nav>
  );
}
