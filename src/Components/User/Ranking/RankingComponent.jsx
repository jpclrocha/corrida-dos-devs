import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import './RankingComponent.scss'
import RankingModal from './RankingModal'

export default function RankingComponent() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		const getRankings = async () => {
			const ranking = await api.get('/users')
			setUsers(ranking.data)
		}
		getRankings()
	}, [])

	return (
		<div className='ranking-component-container'>
			<div className='ranking-input-container'>
				<h1 className='ranking-heading'>
					Ranking dos Alunos (Top 10 corredores)
				</h1>
			</div>

			{users.map((user) => {
				return <RankingModal {...user} key={user.id} />
			})}
		</div>
	)
}
