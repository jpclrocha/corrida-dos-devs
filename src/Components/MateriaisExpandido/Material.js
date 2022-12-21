import Faixa from "./Faixa.js";
import Preview from "./Preview.js";
import Descricao from "./Descricao.js";
import Menu from "../LandingPage/Menu.js";

export default function Material() {
  return (
    <>
      <Menu />
      <div className="flex flex-wrap justify-evenly content-between">
        <Faixa />
        <Preview />
        <Descricao />
      </div>
    </>
  );
}
