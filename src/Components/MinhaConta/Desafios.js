export default function Desafios() {
  const desafios = ['Calculadora' , 'TodoList'];

  const concluidos = desafios.map((item) => {
    return <h1 className="text-xl mr-20">{item}</h1>;
  });

  const temDesafios = () => {
    return desafios.length > 0 ? (
      concluidos
    ) : (
      <h1 className="text-xl">Nenhum desafio encontrado</h1>
    );
  };
  return (
    <div className="bg-branco w-[60vw] h-fit rounded-xl py-5 px-10 my-5 shadow-2xl">
      <h1 className="font-extrabold text-2xl">Desafios Concluídos</h1>
      <div className="flex flex-wrap">
      {temDesafios()}
      </div>
    </div>
  );
}
