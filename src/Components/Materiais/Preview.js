export default function Preview() {
  const info = {
    inicio: "Comece a qualquer momento",
    requisitos: "Nenhum! Você vai começar do absoluto zero.",
  };

  return (
    <div className="flex bg-branco w-[90vw] rounded-3xl p-10 mx-auto mt-10">
      <div className="bg-verde w-3/6 h-[60vh] rounded-xl flex justify-center items-center">
        <img src="nuvem-download.svg" />
      </div>

      <div className="p-10 w-fit">
        <div className="mb-10">
          <h1 className="text-verde text-2xl font-extrabold">Data de início</h1>
          <p className="text-lg font-medium">{info.inicio}</p>
        </div>

        <div>
          <h1 className="text-verde text-2xl font-extrabold">Pré-requisitos</h1>
          <p className="text-lg font-medium">{info.requisitos}</p>
        </div>
      </div>
    </div>
  );
}
