import SenhaModal from "./senhaModal";
import RodapeCs from "./RodapeCs";

export default function recuperarSenha() {
  return (
    <div>
      <div className="flex items-center justify-evenly bg-cinzaLg h-[90vh]">
      <div className="h-[50vh] w-[50vw]">
        <a
          className="inline-flex text-3xl font-sans font-bold h-fit text-branco mb-5"
          href="#"
        >
          Corrida dos DEVs
          <img src="logo.svg" alt="Corrida-dos-devs-logo" className="pl-2" />
        </a>
        <h1 className="text-branco font-medium text-8xl">Recupere a sua senha:</h1>
      </div>
      <SenhaModal />
    </div>
    <RodapeCs/>
    </div>
  );
}
