import CadastroForm from "./CadastroForm.js";
import RodapeCs from "../RodapeCs";
import { Link } from "react-router-dom";

export default function CadastroModal() {
  return (
    <div>
      <div className="flex items-center justify-evenly bg-cinzaLg h-[90vh]">
        <CadastroForm />
        <div className="h-[50vh] w-[50vw]">
          <Link
            to="/"
            className="inline-flex text-4xl font-sans font-bold h-fit text-branco mb-5"
          >
            Corrida dos DEVs
            <img
              src="logoBranca.svg"
              alt="Corrida-dos-devs-logo"
              className="pl-2"
            />
          </Link>

          <h1 className="text-branco font-medium text-7xl">
            Acione o start e comece a corrida para a evolução
          </h1>
          <p className="mt-5 text-xl">
            Entre para a corrida dos devs e acelere na direção dos seus
            objetivos
          </p>
        </div>
      </div>
      <RodapeCs />
    </div>
  );
}
