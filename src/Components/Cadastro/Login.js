import LoginModal from "./LoginModal";
import RodapeCs from "./RodapeCs";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="flex items-center justify-evenly bg-cinzaLg h-[90vh]">
        <div className="h-[50vh] w-[50vw]">
          <a
            className="inline-flex text-3xl font-sans font-bold h-fit text-branco mb-5"
            href="#"
          >
            <Link to='/'>Corrida dos DEVs</Link>
            <img src="logoBranca.svg" alt="Corrida-dos-devs-logo" className="pl-2" />
          </a>
          <h1 className="text-branco font-medium text-8xl">
            Faça seu login na plataforma
          </h1>
        </div>
        <LoginModal />
      </div>
      <RodapeCs />
    </div>
  );
}
