import './Challenges.scss'

export default function Challenges({ userChallengesResponse }) {
	return (
		<div className='challenges-container'>
			<h1 className='challenges-title'>Desafios concluidos</h1>
			<p className='challenges-text'>
				{userChallengesResponse
					? userChallengesResponse
					: 'Nenhum desafio concluido'}
			</p>
		</div>
	)
}
