import Faixa from "./Faixa.js";
import Preview from "./Preview.js";
import Descricao from "./Descricao.js";

export default function MaterialModal() {
  return (
    <div className="flex flex-wrap justify-evenly content-between">
        <Faixa />
        <Preview />
        <Descricao />
      </div>
  )
}
