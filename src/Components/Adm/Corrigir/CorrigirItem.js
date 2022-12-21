export default function CorrigirItem({ aluno }) {
  return (
    <div className="bg-branco w-[70vw] h-28 rounded-full inline-flex mb-6 shadow-xl justify-between">
      <div className="inline-flex">
        <div className="bg-vermelho w-28 h-28 rounded-full">
          <img
            src="ft-perfil.svg"
            alt="Foto de perfil"
            className="mx-auto my-auto"
          />
        </div>

        <div className="self-center ml-6">
          <h1 className="text-2xl font-extrabold text-verde">
            Nome: {aluno.nome}
          </h1>
          <h2 className="text-xl font-extrabold text-verde">
            Link: {aluno.link}
          </h2>
        </div>

      </div>
        <div className="bg-verde w-28 h-28 rounded-full flex">
          <img
            src="certoDesafio.svg"
            alt="Foto de perfil"
            className="mx-auto my-auto"
          />
        </div>
    </div>
  );
}
