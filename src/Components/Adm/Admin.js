import React from 'react'
import AdminMenu from './AdminMenu'
import CardAdmin from './CardAdmin'

export default function Admin() {
  return (
    <>
      <AdminMenu/>

      <div className='p-32'>
        <h1 className='text-branco text-4xl font-bold mb-5 pl-5'>Espaço Administrador:</h1>
        <CardAdmin texto='Adicionar matérias' foto='livro.svg' textBtn='Adicionar!' rota='/NewMaterial'/>
        <CardAdmin texto='Adicionar desafios semanais' foto='raio.svg' textBtn='Adicionar!' rota='/NewDesafio' />
        <CardAdmin texto='Corrigir desafios semanais' foto='certo.svg' textBtn='Corrigir!' rota='/Corrigir'/>
        
      </div>
    </>
  )
}
