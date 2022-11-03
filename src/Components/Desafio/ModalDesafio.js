import React from 'react'

export default function ModalDesafio(props) {
    const nome = props.nome
    const descricao = props.descricao
    const requisitos = props.requisitos
    const pontos = props.pontos
    const imagem = props.imagem
    
  return (
    <div className='w-[90vw] h-[50vh] bg-branco rounded-3xl p-10'>
        Desafio calculadora
    </div>
  )
}
