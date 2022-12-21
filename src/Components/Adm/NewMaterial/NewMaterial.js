import AdminMenu from "../AdminMenu";
import FaixaMaterial from "./FaixaMaterial";

export default function NewMaterial() {
  return (
    <>
      <AdminMenu />
      <FaixaMaterial />

      <div className="flex justify-evenly">
        <div className="w-[50%]">
          <div className="bg-branco p-5 mb-10 rounded-2xl">
            <h1 className="text-verde text-xl font-bold">
              Título (obrigatório):
            </h1>
            <input
              type="text"
              placeholder="Adicione um título aqui"
              className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
            />
          </div>

          <div className="bg-branco p-5 rounded-2xl">
            <h1 className="text-verde text-xl font-bold">Descrição:</h1>
            <input
              type="text"
              placeholder="Descreva o material para todos os usuários"
              className="border border-black rounded-lg w-full mb-2 p-5 h-40"
            />
          </div>
        </div>

        <div className="w-[30%]">
          <div className="bg-branco mb-5 rounded-2xl p-5">
            <div className="bg-verde h-[30vh] w-full rounded-xl flex justify-center items-center">
              <img src="nuvem-download.svg"/>
            </div>
            <h1 className="text-verde text-2xl font-extrabold text-center">
              Arraste e solte o material para enviar
            </h1>
          </div>
          <div className="bg-branco p-5 rounded-2xl">
            <h1 className="text-verde text-lg font-bold">
              Data de visibilidade:
            </h1>
            <input
              type="text"
              placeholder="Data de visibilidade"
              className="border border-black rounded-lg w-full mb-2 p-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
