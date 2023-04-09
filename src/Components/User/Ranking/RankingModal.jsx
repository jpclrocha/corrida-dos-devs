import image from '../../../assets/ft-perfil.svg'
import './RankingModal.scss'

export default function RankingModal({ id, userName, userRankPoints, turma }) {
	return (
		<div className='ranking-modal' key={id}>
			<div className='student-ranking'>
				<div className='ranking-modal-image-container'>
					<img
						src={image}
						alt='Foto de perfil'
						className='ranking-modal-image'
					/>
				</div>

				<div className='student-ranking-info'>
					<h1>
						{userName.charAt(0).toUpperCase() + userName.slice(1)}
					</h1>
					<h2>{turma ? turma : 'Estudante sem turma'}</h2>
				</div>
			</div>

			<div className='student-ranking-pontuacao'>
				<h1>{userRankPoints ? userRankPoints : 0}</h1>
				<h2>Pontos</h2>
			</div>
		</div>
	)
}
