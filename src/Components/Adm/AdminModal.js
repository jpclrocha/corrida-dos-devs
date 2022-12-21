import CardAdmin from './CardAdmin'

export default function AdminModal() {
  return (
    <div className='p-32'>
        <h1 className='text-branco text-4xl font-bold mb-5 pl-5'>Espaço Administrador:</h1>
        <CardAdmin texto='Adicionar matérias' foto='livro.svg' textBtn='Adicionar!' rota='/novoMaterial'/>
        <CardAdmin texto='Adicionar desafios semanais' foto='raio.svg' textBtn='Adicionar!' rota='/novoDesafio' />
        <CardAdmin texto='Corrigir desafios semanais' foto='certo.svg' textBtn='Corrigir!' rota='/corrigir'/>
        
      </div>
  )
}
