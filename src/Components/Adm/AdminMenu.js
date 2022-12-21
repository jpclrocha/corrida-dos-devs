import { Link } from "react-router-dom"

export default function AdminMenu() {
  return (
    <nav className="w-[97vw] h-24 py-5 inline-flex justify-between items-center text-branco">
      <h1
        className="inline-flex text-4xl font-sans font-bold h-fit ml-[5%]"
      >
        <img src="logoBranca.svg" alt="Corrida-dos-devs-logo" className="pr-2"/>
        <Link to='/'>Olá, fulan@</Link>
      </h1>
      <ul className="inline-flex w-1/2 justify-evenly object-right">
        <li className='text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer'><Link to='/Adm'>Home</Link></li>
        <li className='text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer '><Link to='/Ranking'>Ranking</Link></li>
        <li className='text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer '><Link to='/PlaylistMateriais'>Materiais</Link></li>
        <li className='text-2xl font-sans font-bold h-10 w-32 text-center m-0 h-fit p-1.5 rounded-xl text-branco border-none cursor-pointer bg-verde'><Link to='/MinhaConta'>Conta</Link></li>
      </ul>
    </nav>
  )
}
