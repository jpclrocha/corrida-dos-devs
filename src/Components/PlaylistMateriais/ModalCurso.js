import { Link } from "react-router-dom";

export default function ModalCurso(props) {
  const nome = props.nome;
  const descricao = props.descricao;
  const ideal = props.ideal;
  const conteudo = props.conteudo;

  const gera = conteudo.map((item) => {
    return <li className="text-branco list-disc text-xs 2xl:text-base 2xl:text" key={item.id} >{item.titulo}</li>;
  });
  //nome, descricao, ideal, conteudo
  return (
    <div className="bg-branco flex w-4/5 rounded-[75px] h-fit justify-around items-center mb-10 shadow-2xl">
      <div className="ml-10 bg-verde rounded-[50%] flex xl:w-[225px] xl:h-[200px]">
        <img src="playBtn.svg" alt="Play Button" className="mx-auto my-auto w-[256px]" />
      </div>

      <div className="h-fit p-10 mx-auto my-0">
        <h1 className="text-5xl text-verde font-extrabold">{nome}</h1>
        <div className="w-1/2">
          <p className="text-verde text-2xl">{descricao}</p>
        </div>
      </div>

      <div className="w-1/4 h-full p-5 mr-5">
        <h1 className="text-verde text-base mb-1 text-base xl:text-sm 2xl:text-base">{ideal}</h1>
        <ul className="w-full h-fit bg-verde p-7 rounded-xl">
          {gera}
        </ul>
        <button className="bg-verde mt-5 w-full h-[5vh] text-branco rounded-xl"><Link to={props.rota}>Iniciar jornada</Link></button>
      </div>

    </div>
  );
}
