import { Link } from "react-router-dom"
export default function senhaModal() {
  return (
    <div className="bg-branco w-fit h-[35vh] p-16 rounded-xl">
      <h1>Email:</h1>
      <input placeholder="digite seu email aqui" className="border border-black rounded-lg w-full mb-2 h-[50px] p-5"/>
      <button type="submit" className="bg-verde w-full rounded-lg h-[40px] text-branco mb-[20px]"><Link to='/'>ENVIAR CÓDIGO</Link></button>
    </div>
  )
}
