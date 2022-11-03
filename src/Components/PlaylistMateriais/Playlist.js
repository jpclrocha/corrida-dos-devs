import ModalCurso from "./ModalCurso";

export default function Playlist() {
  const curso = {
    nome: "HTML, CSS e JS",
    descricao: "Trilha de conhecimento para primeiro contato com a programação",
    ideal:
      "Ideal para você que está começando do absoluto zero na programação se familiarizar com esse incrível universo",
    conteudo: [
      {titulo: "Fundamentos básicos",id:1},
      {titulo: "Pensamento computacional", id:2},
      {titulo: "Programação Web", id: 3},
      {titulo: "E muito mais conteúdo pra explorar!", id: 4},
    ],
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      <h1 className="text-5xl font-extrabold text-branco my-20">Materiais de estudo:</h1>
      <ModalCurso nome={curso.nome} descricao={curso.descricao} ideal={curso.ideal} conteudo={curso.conteudo}/>
      <ModalCurso nome={curso.nome} descricao={curso.descricao} ideal={curso.ideal} conteudo={curso.conteudo}/>
    </div>
  );
}
