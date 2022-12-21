import SenhaForm from "./senhaForm";
import RodapeCs from "../RodapeCs";
import { Link } from "react-router-dom";

export default function SenhaModal() {
  return (
    <div>
      <div className="flex items-center justify-evenly bg-cinzaLg h-[90vh]">
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

          <h1 className="text-branco font-medium text-8xl">
            Recupere a sua senha:
          </h1>
        </div>
        <SenhaForm />
      </div>
      <RodapeCs />
    </div>
  );
}
