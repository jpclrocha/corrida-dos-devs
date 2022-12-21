import CorrigirItem from "./CorrigirItem";

export default function CorrigirModal() {
    const alunos = [
        {
          nome: "João Pedro",
          link: "github.com/jpclrocha",
        },
        {
          nome: "João Pedro",
          link: "github.com/jpclrocha",
        },
      ];
  return (
    <div className="mx-20 my-20 flex justify-evenly flex-wrap">
        <div className="inline-flex mb-4 justify-between w-[70vw]">
          <h1 className="text-4xl font-extrabold text-branco ml-8">
            Aluno que fizeram o desafio:
          </h1>
          <input
            className="bg-branco w-96 self-center h-8 rounded-full p-4 shadow-2xl placeholder-preto placeholder:font-bold"
            placeholder="Buscar"
          />
        </div>

        {alunos.map((item) => {
          return <CorrigirItem aluno={item} />;
        })}
      </div>
  )
}
