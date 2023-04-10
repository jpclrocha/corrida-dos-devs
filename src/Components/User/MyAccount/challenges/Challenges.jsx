import './Challenges.scss'

export default function Challenges({ userChallengesResponse }) {
	const generator = userChallengesResponse?.map((response) => {
		return (
			<h1 className='response-text' key={response}>
				{response}
			</h1>
		)
	})
	return (
		<div className='challenges-container'>
			<h1 className='challenges-title'>Desafios concluidos</h1>
			<div className='challenges-text'>
				{generator ? generator : 'Nenhum desafio concluido'}
			</div>
		</div>
	)
}
