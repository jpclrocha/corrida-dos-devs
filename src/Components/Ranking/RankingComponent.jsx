import { useEffect, useState } from 'react'
import RankingModal from './RankingModal'
import './RankingComponent.scss'

export default function RankingComponent() {
	const [students, setStudents] = useState([])
	useEffect(() => {
		fetch('https://APiRestAula.j0p3.repl.co/users').then((response) =>
			response.json().then((studentsList) => {
				setStudents(studentsList)
			})
		)
	}, [])

	const teste = [{ id: 0, name: 'joao', turma: null, pontuacao: 0 }]
	return (
		<div className='ranking-component-container'>
			<div className='ranking-input-container'>
				<h1 className='ranking-heading'>Ranking dos Alunos</h1>
				<input className='ranking-input-box' placeholder='Buscar' />
			</div>

			{teste.map((item) => {
				return <RankingModal student={item} key={item.id} />
			})}
		</div>
	)
}
