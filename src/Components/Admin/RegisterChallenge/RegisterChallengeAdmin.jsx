import { useState } from 'react'
import image from '../../../assets/nuvem-download.svg'
import { api } from '../../../services/api'
import Button from '../../Utils/Button/Button'
import Faixa from '../../Utils/Faixa/Faixa'
import Input from '../../Utils/Input/Input'
import './RegisterChallengeAdmin.scss'

const defaultChallenge = {
	challengeTitle: '',
	challengeBio: '',
	challengeDeadline: '',
	challengeImageURL: '',
	challengePoints: 0,
	challengeRequirements: [],
}

export default function RegisterChallengeAdmin() {
	const [challenge, setChallenge] = useState(defaultChallenge)
	const [challengeRequirements, setChallengeRequirements] = useState('')

	const resetFormFields = () => {
		setChallenge(defaultChallenge)
		setChallengeRequirements('')
	}

	const handleRequirements = (event) => {
		const { name, value } = event.target
		setChallengeRequirements({ ...challengeRequirements, [name]: value })
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setChallenge({ ...challenge, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const response = await api
			.post('/challenges', challenge)
			.catch((error) => {
				if (error.response.status === 400) alert('Campos invalidos')
			})

		const lista = challengeRequirements.challengeRequirements.split('; ')
		lista.map(async (item) => {
			await api.post('/challengescontent', {
				challengeId: response.data[0].id,
				challengeContent: item,
			})
		})

		alert('Desafio adicionado com sucesso')
		resetFormFields()
	}

	return (
		<>
			<Faixa
				colorType='cinza'
				materialTitle='Adicionar desafio semanal:'
			/>
			<form className='register-container' onSubmit={handleSubmit}>
				<div className='register-material-input-container'>
					<div className='register-material-input'>
						<Input
							label='Título: (Obrigatório)'
							type='text'
							placeholder='Adicione um título aqui'
							required
							color='verde'
							name='challengeTitle'
							value={challenge.challengeTitle}
							onChange={handleChange}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Descrição: (Obrigatório)'
							type='text'
							placeholder='Descreva o material para todos os usuários'
							required
							color='verde'
							name='challengeBio'
							value={challenge.challengeBio}
							onChange={handleChange}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Requisitos: (Se mais de 1, separe por ponto e vírgula (;) )'
							type='text'
							placeholder='Descreva os requisitos que os participantes devem seguir para serem avaliados corretamente'
							required
							color='verde'
							name='challengeRequirements'
							value={challengeRequirements.challengeRequirements}
							onChange={handleRequirements}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Quantidade de pontos:'
							type='number'
							placeholder='Quanto vale o desafio'
							required
							color='verde'
							name='challengePoints'
							value={challenge.challengePoints}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='upload-container'>
					<div className='upload-input-container'>
						<div className='upload-image'>
							<img src={image} alt='material-upload' />
						</div>
						<Input
							label='Adicione o link para a referência'
							type='text'
							placeholder='Link para a referência'
							required
							color='verde'
							name='challengeImageURL'
							value={challenge.challengeImageURL}
							onChange={handleChange}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Data final de entrega:'
							type='date'
							required
							color='verde'
							name='challengeDeadline'
							value={challenge.challengeDeadline}
							onChange={handleChange}
						/>
					</div>

					<Button type='submit' buttonType='verde'>
						Enviar
					</Button>
				</div>
			</form>
		</>
	)
}
