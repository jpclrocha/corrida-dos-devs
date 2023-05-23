import React from 'react'
import image from '../../../assets/ft-perfil.svg'
import './RankingModal.scss'

export default function RankingModal({ id, userName, userRankPoints, turma }) {
	const name = userName.split(' ')

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
					{name.length > 1 ? (
						<h1>{`${name[0]} ${name[name.length - 1]}`}</h1>
					) : (
						<h1>{name}</h1>
					)}
				</div>
			</div>

			<div className='student-ranking-pontuacao'>
				<h1>{userRankPoints ? userRankPoints : 0}</h1>
				<h2>Pontos</h2>
			</div>
		</div>
	)
}
