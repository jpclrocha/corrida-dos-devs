import { useEffect, useState } from 'react'
import image from '../../../assets/ft-perfil.svg'
import { api } from '../../../services/api'
import Button from '../../Utils/Button/Button'
import Input from '../../Utils/Input/Input'
import './Modal.scss'

const defaultUser = {
	userName: '',
	userBio: '',
	userEmail: '',
	userRankPoints: '',
	userChallengesResponse: '',
	userRule: '',
	socialName: '',
}

const defaultChallenge = {
	challengeTitle: '',
	challengeDescription: '',
	challengeRequirements: '',
	challengeDeadline: '',
	challengePoints: '',
	challengeImageURL: '',
	challengeContentList: '',
}

export default function Modal({
	userId,
	challengeId,
	challengeLinkResponse,
	rated,
	id,
}) {
	const [user, setUser] = useState(defaultUser)
	const [challenge, setChallenge] = useState(defaultChallenge)
	const [points, setPoints] = useState('')

	useEffect(() => {
		const getMaterial = async () => {
			try {
				const res = await api.get(`/users/${userId}`)
				setUser(res.data)
				const challengeRes = await api.get(`/challenges/${challengeId}`)
				setChallenge(challengeRes.data[0])
			} catch (error) {
				console.log(error.message)
			}
		}
		getMaterial()
	}, [])

	const handleChange = (event) => {
		const { name, value } = event.target
		setPoints({ ...points, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (
			parseInt(points.points) > challenge.challengePoints ||
			parseInt(points.points) < 0
		) {
			alert('Digite uma pontuacao valida para o desafio em questao')
			return
		}
		const patchUser = {
			userId: userId,
			patchColumn: 'userRankPoints',
			valueColumn:
				parseInt(user.userRankPoints) + parseInt(points.points),
		}
		await api.patch('/users', patchUser)

		await api.patch('/challengesresponse', {
			challengeResponseId: id,
			patchColumn: 'rated',
			valueColumn: 'True',
		})
		alert('Nota postada')
		window.location.reload()
	}

	if (!user) return <h1>Loading...</h1>
	return (
		<div className='rate-modal-container'>
			<div className='rate-userinfo-container'>
				<div className='rate-img-container'>
					<img
						src={image}
						alt='Foto de perfil'
						className='rate-img'
					/>
				</div>

				<div className='rate-info'>
					<h1 className='rate-username'>
						Nome do aluno: {user.userName}
					</h1>
					<h1 className='rate-username'>
						Desafio: {challenge.challengeTitle}
					</h1>
					<h1 className='rate-username'>
						Vale: {challenge.challengePoints}
					</h1>
					<a
						href={challengeLinkResponse}
						target='_blank'
						className='rate-challenge-link'
						rel='noreferrer'
					>
						Clique aqui para ver o que o aluno fez
					</a>
				</div>
			</div>
			<form className='rate-challenge-button' onSubmit={handleSubmit}>
				<Input
					label='Qual nota deseja dar:'
					placeholder='digite a nota a ser dada'
					type='number'
					name='points'
					value={points.points}
					onChange={handleChange}
				/>
				<Button type='Submit' buttonType='vazado' className='btn-rate'>
					Enviar
				</Button>
			</form>
		</div>
	)
}
