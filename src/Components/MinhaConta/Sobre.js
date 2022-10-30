export default function Sobre() {
  const about = "Sou aluno de Desenvolvimento de Sistemas, gosto muito de estudar sobre a parte do Front-end"
  return (
    <div className="bg-branco w-[60vw] h-fit rounded-xl py-5 px-10 my-5 shadow-2xl">
      <h1 className="font-extrabold text-2xl">Sobre mim</h1>
      <h1 className="text-xl">
        {about}
      </h1>
    </div>
  );
}
