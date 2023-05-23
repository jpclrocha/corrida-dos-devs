import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import './ChallengeComponent.scss'
import ChallengeModal from './ChallengeModal'

export default function ChallengeComponent() {
	const [desafio, setDesafio] = useState([])

	useEffect(() => {
		const getMaterial = async () => {
			try {
				const res = await api.get('/challenges')
				setDesafio(res.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getMaterial()
	}, [])
	if (!desafio.length) return <h3>Loading...</h3>

	const dataHoje = `${new Date().getDate()}-${
		new Date().getMonth() + 1
	}-${new Date().getFullYear()}`

	return (
		<div className='desafio-component-container'>
			<div className='titulo'>Desafios da semana:</div>
			{desafio.map((item) => {
				if (item.challengeDeadline >= dataHoje) {
					return <ChallengeModal {...item} key={item.id} />
				}
			})}
		</div>
	)
}
