import image from '../../../assets/calc.svg'
import Button from '../../Utils/Button/Button'
import './ChallengeModal.scss'

export default function ChallengeModal({
	challengeImageURL,
	challengeTitle,
	challengeDescription,
	challengePoints,
	challengeContentList,
	challengeDeadline,
}) {
	console.log(challengeContentList)
	const gera = challengeContentList.map((item) => {
		return (
			<li key={item} style={{ color: '#ffffff' }}>
				{item.challengeContent}
			</li>
		)
	})

	return (
		<div className='desafio-container'>
			<div className='img-and-info'>
				<div className='imagem-container'>
					<img
						src={image}
						alt='desafio-imagem'
						className='desafio-imagem'
					/>
				</div>
				<div className='desafio-info-container'>
					<div className='titulo'>
						<h1>{challengeTitle}</h1>
						<p>{challengeDescription}</p>
					</div>
					<div className='requisitos-container'>
						<div className='requisitos'>
							<h1>Requisitos:</h1>
							{gera}
						</div>
						<div className='requisitos-btn'>
							<a
								href={challengeImageURL}
								target='_blank'
								rel='noreferrer'
							>
								Clique para ver referência
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='secondary-info-container'>
				<div className='response-container'>
					<h1 className='response-title'>
						Adicione o link para correção
					</h1>
					<input
						type='text'
						placeholder='adicione o link aqui'
						id='resposta'
						className='input-response'
					/>
					<Button
						type='submit'
						name='submitBtn'
						value='desafio'
						buttonType={'verde'}
						id='submitBtn'
					>
						Enviar
					</Button>
				</div>

				<div className='pontuacao'>
					<h1>Valendo:</h1>
					<h1>{challengePoints} pontos</h1>
				</div>
			</div>
		</div>
	)
}
