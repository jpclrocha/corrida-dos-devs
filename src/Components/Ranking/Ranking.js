import Modal from "./Modal";

export default function Ranking() {
  const alunos = [
    {
      nome: "Juão Pedri",
      turma: "913B",
      pontuacao: 1000,
    },
    {
      nome: "Denilson",
      turma: "913B",
      pontuacao: 830,
    },
    {
      nome: "Clauberlan",
      turma: "913B",
      pontuacao: 700,
    },
    {
      nome: "Demitri",
      turma: "913B",
      pontuacao: 701,
    },
    {
      nome: "Gulherme",
      turma: "913B",
      pontuacao: 831,
    },
    {
      nome: "Rathanael",
      turma: "913B",
      pontuacao: 999,
    },
  ]
    .sort((a, b) => {
      if (a.pontuacao > b.pontuacao) {
        return 1;
      }
      if (a.pontuacao < b.pontuacao) {
        return -1;
      }
      return 0;
    })
    .reverse();

  return (
    <div className="mx-20 my-20 flex justify-evenly flex-wrap">
      <div className="inline-flex mb-4 justify-between w-[70vw]">
        <h1 className="text-4xl font-extrabold text-branco ml-8">
          Ranking dos Alunos
        </h1>
        <input className="bg-branco w-96 self-center h-8 rounded-full p-4 shadow-2xl placeholder-preto placeholder:font-bold" placeholder="Buscar"/>
      </div>

      {alunos.map((item) => {
        return <Modal aluno={item} />;
      })}
    </div>
  );
}
