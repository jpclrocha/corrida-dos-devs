export default function ModalDesafio(props) {
  const nome = props.nome;
  const descricao = props.descricao;
  const requisitos = props.requisitos;
  const pontos = props.pontos;
  const imagem = props.imagem;

  const gera = requisitos.map((item) => {
    return (
      <li key={item.id} className="text-branco">
        {item.titulo}
      </li>
    );
  });
  return (
    <div className="w-[90vw] h-[70vh] bg-branco rounded-[75px] p-10 shadow-2xl flex-wrap flex justify-evenly">
      <div className="bg-verde w-[200px] h-[200px] flex rounded-[50%]">
        <img
          src={imagem}
          alt="desafio-imagem"
          className="mx-auto my-auto w-[100px]"
        />
      </div>
      <div className="w-3/4 h-2/3 flex flex-wrap justify-evenly">
        <div className=" w-[45%] h-fit pt-10">
          <h1 className="text-4xl font-extrabold text-verde mb-2">{nome}</h1>
          <p className="text-verde text-xl">{descricao}</p>
        </div>
        <div className="w-[45%] p-10 h-fit">
          <div className="bg-verde w-full h-fit mb-7 p-5 rounded-xl">
            <h1 className="text-branco text-xl font-semibold ">Requisitos:</h1>
            {gera}
          </div>

          <button className="text-branco bg-preto w-full h-12 rounded-xl">
            Clique para ver referência
          </button>
        </div>
      </div>

      <div className="w-[96%] flex flex-wrap justify-between h-fit">
        <div className="w-[50%]">
          <h1 className="text-verde font-extrabold text-xl">
            Adicione o link para que possamos corrigir
          </h1>

          <input
            type="text"
            placeholder="adicione o link aqui"
            id="resposta"
            className="w-[70%] h-[60px] border border-black rounded-2xl text-verde p-5 shadow-lg"
          />
          <button
            type="submit"
            name="submitBtn"
            value="desafio"
            className="bg-verde text-branco w-[20%] h-[60px] ml-5  rounded-xl font-extrabold text-xl"
          >
            Enviar
          </button>
        </div>

        <div className="w-[39%] pl-10">
          <h1 className="text-verde font-extrabold text-2xl">Valendo:</h1>
          <h1 className="text-verde font-extrabold text-4xl">{pontos},0</h1>
          <h1 className="text-verde font-extrabold text-2xl">Pontos</h1>
        </div>
      </div>
    </div>
  );
}
