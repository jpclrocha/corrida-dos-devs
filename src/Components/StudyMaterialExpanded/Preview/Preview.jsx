import './Preview.scss'

export default function Preview({ materialVideoUrl }) {
	return (
		<div className='preview-container'>
			<iframe
				className='video-container'
				src={materialVideoUrl}
				title='video for material'
				allowFullScreen
			></iframe>

			<div className='info-container'>
				<div className='deadline'>
					<h1 className='deadline-title'>Data de início</h1>
					<p className='deadline-text'>Comece a qualquer momento</p>
				</div>

				<div>
					<h1 className='requirements-title'>Pré-requisitos</h1>
					<p className='requirements-text'>
						Nenhum! Você vai começar do absoluto zero.
					</p>
				</div>
			</div>
		</div>
	)
}
