import './RankingModal.scss'
export default function RankingModal({ student }) {
	return (
		<div className='ranking-modal'>
			<div className='student-ranking'>
				<div className='ranking-modal-image-container'>
					<img
						src='ft-perfil.svg'
						alt='Foto de perfil'
						className='ranking-modal-image'
					/>
				</div>

				<div className='student-ranking-info'>
					<h1>Nome: {student.name}</h1>
					<h2>Turma: {student.turma}</h2>
				</div>
			</div>

			<div className='student-ranking-pontuacao'>
				<h1>{student.pontuacao ? student.pontuacao : 0}</h1>
				<h2>Pontos</h2>
			</div>
		</div>
	)
}
