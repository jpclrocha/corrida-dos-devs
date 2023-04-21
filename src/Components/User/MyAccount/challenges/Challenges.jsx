import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { api } from '../../../../services/api'
import Button from '../../../Utils/Button/Button'
import './Challenges.scss'

export default function Challenges({ userChallengesResponse }) {
	const [challenges, setChallenges] = useState([])
	// console.log(userChallengesResponse)
	useEffect(() => {
		userChallengesResponse?.map(async (item) => {
			const challengeName = await api.get(`/challenges/${item}`)
			setChallenges([...challenges, challengeName])
		})
	}, [])
	console.log(challenges)
	return (
		<div className='challenges-container'>
			<h1 className='challenges-title'>Desafios concluidos</h1>

			<div className='challenges-text'>
				{userChallengesResponse?.length
					? userChallengesResponse.map((response) => {
							return (
								<h1 className='response-text' key={response}>
									{response}
								</h1>
							)
					  })
					: 'Nenhum desafio concluido'}
			</div>
		</div>
	)
}
