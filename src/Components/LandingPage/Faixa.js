
export default function Faixa() {
  return (
    <div className="inline-flex items-center justify-evenly bg-branco w-full h-40 shadow-2xl ">
      <div className="w-[45vw] text-justify">
        <h1 className="text-2xl font-bold">
          <span className="text-verde">A Corrida dos DEVs</span>, site que pretende avaliar
          objetivamente estudantes de programação;
        </h1>
        <p className="text-base">
          também temos como objetivo estimular o desenvolvimento acadêmico para
          construir profissionais de qualidade.
        </p>
      </div>
      <button type="button" className="card-btn">
        Confira o Ranking
      </button>
    </div>
  );
}
