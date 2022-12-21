import { Link } from "react-router-dom";
import "../../Stylesheets/LandingPage/Menu.css";

export default function Menu() {
  return (
    <nav className="w-full h-24 py-5 inline-flex justify-between items-center shadow-2xl bg-branco">
      <Link
        to="/"
        className="inline-flex text-4xl font-sans font-bold h-fit ml-[5%]"
      >
        Corrida dos DEVs
        <img src="logo.svg" alt="Corrida-dos-devs-logo" className="pl-2" />
      </Link>

      <ul className="inline-flex w-1/3 justify-evenly object-right">
        <Link to="/ranking" className="lItem">
          <li>Ranking</li>
        </Link>
        <Link to="/cadastro" className="lItem">
          <li>Cadastro</li>
        </Link>
        <Link to="/login" className="lItemU">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
