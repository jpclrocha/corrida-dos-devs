export default function Descricao() {
  const material = 
  [{
    nome:"HTML, CSS e JS",
    descricao: "Você vai construir os primeiros conhecimentos sobre programação e tecnologia. Desde a diferenciação entre hardware e software, internet e seu papel no desenvolvimento, até o pensamento computacional e lógico, passando por tipos de aplicações web e linguagem de programação. Este é o lugar para aprender sobre o funcionamento de sistemas operacionais e a escolha do melhor sistema operacional pra você. Você vai ganhar clareza sobre as bases da programação para web e aprender palavras e conceitos desse novo universo.",
  }]

  return (
    <div className="mt-10 h-fit p-10 w-[90vw]">
      <div className="h-[2px] bg-rodape w-full"></div>
      <h1 className="text-2xl font-extrabold text-branco pt-10 pl-10">O que você poderá construir</h1>
      <p className="pl-10 pt-5 pb-10  text-branco ">{material[0].descricao}</p>
      <div className="h-[2px] bg-rodape w-full"></div>
    </div>
  );
}
