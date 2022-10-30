export default function Rodape() {
  const footer = ["Sobre Nós", "Política de Privacidade", "Termos e Condições"];
  return (
    <div className="bg-branco w-full mt-16 h-24">
      <div className="h-[1px] bg-rodape lg:w-[94%] absolute mt-5 ml-[3vw]"></div>
      <ul className="items-center inline-flex h-24">
        {footer.map((item) => {
          return (
            <li className="text-base text-rodape ml-[3vw] pr-[3vw]">{item}</li>
          );
        })}
      </ul>
      <div className="h-[1px] bg-rodape lg:w-[94%] absolute mt-[-25px] ml-[3vw]"></div>
    </div>
  );
}
