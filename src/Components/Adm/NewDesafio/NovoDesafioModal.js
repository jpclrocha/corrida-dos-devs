
export default function NovoDesafioModal() {
  return (
    <div className="flex justify-evenly w-[97vw]">
        <div className="w-[50vw]">
          <div className="bg-branco p-4 mb-10 rounded-2xl">
            <h1 className="text-verde text-xl font-bold">
              Título (obrigatório):
            </h1>
            <input
              type="text"
              placeholder="Adicione um título aqui"
              className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"
            />
          </div>

          <div className="bg-branco p-4 rounded-2xl mb-10">
            <h1 className="text-verde text-xl font-bold">Descrição:</h1>
            <input
              type="text"
              placeholder="Descreva o material para todos os usuários"
              className="border border-black rounded-lg w-full mb-2 p-5 h-40"
            />
          </div>

          <div className="bg-branco p-4 rounded-2xl">
            <h1 className="text-verde text-xl font-bold">Requisitos:</h1>
            <input
              type="text"
              placeholder="Requisitos que os participantes devem seguir para serem avaliados corretamente"
              className="border border-black rounded-lg w-full mb-2 p-5"
            />
          </div>
        </div>

        <div className="w-[25vw]">
          <div className="bg-branco mb-5 rounded-2xl p-5">
            <div className="bg-verde h-[30vh] w-full rounded-xl flex justify-center items-center">
              <img src="nuvem-download.svg" alt="conteudo"/>
            </div>
            <h1 className="text-verde text-2xl font-extrabold text-center">
              Arraste e solte o material para enviar
            </h1>
          </div>
          <div className="bg-branco p-5 rounded-2xl mb-5">
            <h1 className="text-verde text-lg font-bold">
              Data de visibilidade:
            </h1>
            <input
              type="date"
              placeholder="Data de visibilidade"
              className="border border-black rounded-lg w-full mb-2 p-2"
            />
          </div>

          <div className="bg-branco p-5 rounded-2xl">
            <h1 className="text-verde text-lg font-bold">
              Quantidade de pontos:
            </h1>
            <input
              type="number"
              placeholder="Quantidade de pontos"
              className="border border-black rounded-lg w-full mb-2 p-2"
            />
          </div>
        </div>
      </div>
  )
}
