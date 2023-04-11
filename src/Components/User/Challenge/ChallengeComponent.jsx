import { useEffect, useState } from 'react'
import image from '../../../assets/calc.svg'
import { api } from '../../../services/api'
import './ChallengeComponent.scss'
import ChallengeModal from './ChallengeModal'

export default function ChallengeComponent() {
	const desafioSemanal = {
		nome: 'Desafio calculadora',
		descricao: 'Objetivo: desenvolver uma calculadora web',
		requisitos:
			'Utilizar: HTML, CSS e JS; Ambiente de desenvolvimento a critério do usuário',
		pontos: 50,
		imagem: image,
	}

	const [desafio, setDesafio] = useState([])

	/*useEffect(() => {
		const getMaterial = async () => {
			try {
				const res = await api.get('/material')
				setDesafio(res.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getMaterial()
	}, [])*/

	return (
		<div className='desafio-component-container'>
			<div className='titulo'>Desafios da semana:</div>
			<ChallengeModal {...desafioSemanal} />
		</div>
	)
}
