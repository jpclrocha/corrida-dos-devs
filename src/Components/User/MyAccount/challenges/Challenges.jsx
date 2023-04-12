import { useState } from 'react'
import ReactModal from 'react-modal'
import Button from '../../../Utils/Button/Button'
import './Challenges.scss'

export default function Challenges({ userChallengesResponse }) {
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
