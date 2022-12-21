import { Link } from "react-router-dom";
import "../../Stylesheets/LandingPage/Menu.css";

export default function Menu() {
  return (
    <nav className="w-full h-24 py-5 inline-flex justify-between items-center shadow-2xl bg-branco">
      <a
        className="inline-flex text-4xl font-sans font-bold h-fit ml-[5%]"
        href="#"
      >
        <Link to='/'>Corrida dos DEVs</Link>
        <img src="logo.svg" alt="Corrida-dos-devs-logo" className="pl-2"/>
      </a>
      <ul className="inline-flex w-1/3 justify-evenly object-right nav-list">
        <li><Link to='/Ranking'>Ranking</Link></li>
        <li><Link to='/Cadastro'>Cadastro</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        
      </ul>
    </nav>
  );
}
