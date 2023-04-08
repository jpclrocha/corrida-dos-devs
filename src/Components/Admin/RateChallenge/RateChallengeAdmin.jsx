import Faixa from '../../Utils/Faixa/Faixa'
import Input from '../../Utils/Input/Input'
import Modal from './Modal'
import './RateChallengeAdmin.scss'

const user = [
	{
		id: 8,
		userName: 'DSerao Montegrego',
		userBio: 'Eu acho que nao sobe.',
		userEmail: 'Goldorayl@gmail.com',
		userRankPoints: 19,
		userSocialNetworks: ['jpclrocha', 'teste'],
		challengeLinkResponse: 'youtube.com',
	},
	{
		id: 7,
		userName: 'D Montegrego',
		userBio: 'Eu acho que nao sobe.',
		userEmail: 'Goldorayl@gmail.com',
		userRankPoints: 19,
		userSocialNetworks: ['jpclrocha', 'teste'],
		challengeLinkResponse: 'twitter.com',
	},
]

export default function RateChallengeAdmin() {
	return (
		<>
			<Faixa materialTitle={'Corrigir desafios'} colorType={'cinza'} />
			<div className='rate-admin-container'>
				<div className='rate-input-container'>
					<h1 className='rate-title'>
						Alunos que fizeram o desafio:
					</h1>
					<Input placeholder='Buscar' />
				</div>

				{user.map((item) => {
					return <Modal {...item} />
				})}
			</div>
		</>
	)
}
