import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import Faixa from '../../Utils/Faixa/Faixa'
import Input from '../../Utils/Input/Input'
import Modal from './Modal'
import './RateChallengeAdmin.scss'

export default function RateChallengeAdmin() {
	const [challengesResponseUser, setChallengesResponseUser] = useState('')
	useEffect(() => {
		const getMaterial = async () => {
			try {
				const res = await api.get('/challengesresponse')
				setChallengesResponseUser(res.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getMaterial()
	}, [])

	if (!challengesResponseUser.length) return <h1>Loading...</h1>
	return (
		<>
			<Faixa materialTitle={'Corrigir desafios'} colorType={'cinza'} />
			<div className='rate-admin-container'>
				<div className='rate-input-container'>
					<h1 className='rate-title'>
						Alunos que fizeram o desafio:
					</h1>
					<Input placeholder='Buscar' />
				</div>

				{challengesResponseUser.map((item) => {
					if (item.rated === 'False') {
						return <Modal {...item} key={item.id} />
					}
				})}
			</div>
		</>
	)
}
