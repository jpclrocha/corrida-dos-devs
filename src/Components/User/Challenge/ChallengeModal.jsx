import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthContext'
import image from '../../../assets/calc.svg'
import { api } from '../../../services/api'
import Button from '../../Utils/Button/Button'
import Input from '../../Utils/Input/Input'
import './ChallengeModal.scss'

const defaultResposta = {
	resposta: '',
}

export default function ChallengeModal({
	id,
	challengeImageURL,
	challengeTitle,
	challengeDescription,
	challengePoints,
	challengeContentList,
	challengeDeadline,
}) {
	const { signed, user } = useContext(AuthContext)
	const navigate = useNavigate()
	const gera = challengeContentList.map((item) => {
		return (
			<li key={item.challengeContent} style={{ color: '#ffffff' }}>
				{item.challengeContent}
			</li>
		)
	})

	const [data, setData] = useState(defaultResposta)

	const handleChange = (event) => {
		const { name, value } = event.target
		setData({ ...data, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!signed) return navigate('/login')

		const resposta = {
			challengeId: id,
			userId: user.id,
			challengeLinkResponse: data.resposta,
			challengeRated: 'False',
		}
		api.post('/challengesresponse', resposta)
	}

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
					<Input
						label={'Adicione o link para correção'}
						type='text'
						placeholder='adicione o link aqui'
						name='resposta'
						value={data.resposta}
						onChange={handleChange}
					/>

					<Button
						type='submit'
						name='submitBtn'
						value='desafio'
						buttonType={'verde'}
						id='submitBtn'
						onClick={handleSubmit}
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
