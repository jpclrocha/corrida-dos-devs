import image from '../../../assets/ft-perfil.svg'
import './RankingModal.scss'

export default function RankingModal({ student }) {
	return (
		<div className='ranking-modal' key={student.id}>
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
						{student.name.charAt(0).toUpperCase() +
							student.name.slice(1)}
					</h1>
					<h2>
						{student.turma ? student.turma : 'Estudante sem turma'}
					</h2>
				</div>
			</div>

			<div className='student-ranking-pontuacao'>
				<h1>{student.pontuacao ? student.pontuacao : 0}</h1>
				<h2>Pontos</h2>
			</div>
		</div>
	)
}
