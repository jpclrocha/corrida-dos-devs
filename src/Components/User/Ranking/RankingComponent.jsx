import { useEffect, useState } from 'react'
import './RankingComponent.scss'
import RankingModal from './RankingModal'

export default function RankingComponent() {
	//const [students, setStudents] = useState([])
	/*
	useEffect(() => {
		fetch('https://APiRestAula.j0p3.repl.co/users').then((response) =>
			response.json().then((studentsList) => {
				setStudents(studentsList)
			})
		)
	}, [])
	*/

	const students = [
		{
			id: 8,
			userName: 'DSerao Montegrego',
			userBio: 'Eu acho que nao sobe.',
			userEmail: 'Goldorayl@gmail.com',
			userRankPoints: 1000,
			userSocialNetworks: ['jpclrocha', 'teste'],
		},
	]
	return (
		<div className='ranking-component-container'>
			<div className='ranking-input-container'>
				<h1 className='ranking-heading'>Ranking dos Alunos</h1>
				<input className='ranking-input-box' placeholder='Buscar' />
			</div>

			{students.map((user) => {
				return <RankingModal {...user} />
			})}
		</div>
	)
}
