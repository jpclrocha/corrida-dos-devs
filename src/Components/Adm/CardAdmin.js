import { Link } from "react-router-dom";

export default function CardAdmin(props) {
  return (
    <div className="bg-branco w-[80vw] flex items-center h-[10vh] rounded-full p-10 justify-between mb-8">
      <div className="inline-flex w-[50%]">
        <img src={props.foto} alt="Corrida-dos-devs-logo" className="mr-5 w-10 h-10" />
        <h1 className="text-verde text-3xl font-bold">{props.texto}</h1>
      </div>
      <button
        type="submit"
        className="bg-verde w-[15%] h-10 rounded-full text-branco text-xl font-bold justify-items-end"
      >
        <Link to={props.rota}>{props.textBtn}</Link>
      </button>
    </div>
  );
}
