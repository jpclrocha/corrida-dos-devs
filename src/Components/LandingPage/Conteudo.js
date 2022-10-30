import Card from "./Card.js";
import Faixa from "./Faixa.js";
import Rodape from "./Rodape.js";

export default function Conteudo() {
  return (
    <section>
      <div className="font-sans inline-flex h-[60vh] justify-evenly items-center w-full bg-cinza">
        <Card
          texto="Conheça nossos"
          verde="desafios da semana"
          texto2="para te ajudar a
        subir no Ranking"
          textoPqn="Cada desafio contém uma pontuação para te ajudar a alcançar uma nova posição"
          btnTxt="Desafios Semanais"
        />

        <Card
          texto="Uma"
          verde="ampla seleção de materiais"
          texto2="para você evoluir no mundo da programação"
          textoPqn="Escolha entre nossos materiais online com novas adições publicadas mensalmente"
          botao="vazado"
          btnTxt="Materiais"
        />
      </div>

      <Faixa />
      <Rodape />
    </section>
  );
}
