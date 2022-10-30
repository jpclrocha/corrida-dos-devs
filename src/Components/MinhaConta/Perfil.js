export default function Perfil() {
  return (
    <div className="w-[30vw] bg-branco h-[70vh] rounded-2xl mt-16 flex flex-wrap content-evenly shadow-2xl">
      <img src="ft-perfil.svg" alt="Foto de perfil" className="mx-auto my-auto"/>
      <h1 className="text-preto font-bold text-3xl text-center w-full">
        João Pedro
      </h1>
      <div className="h-[2px] bg-rodape w-full"></div>
      <h1 className="text-verde font-bold text-2xl text-center w-full">
        Posição no Ranking: 1
      </h1>
    </div>
  );
}
