import Button from '../../Utils/Button/Button'
import './ChallengeModal.scss'

export default function ChallengeModal({
	imagem,
	nome,
	descricao,
	pontos,
	requisitos,
}) {
	const gera = requisitos.map((item) => {
		return (
			<li key={item.id} style={{ color: '#ffffff' }}>
				{item.titulo}
			</li>
		)
	})

	return (
		<div className='desafio-container'>
			<div className='img-and-info'>
				<div className='imagem-container'>
					<img
						src={imagem}
						alt='desafio-imagem'
						className='desafio-imagem'
					/>
				</div>
				<div className='desafio-info-container'>
					<div className='titulo'>
						<h1>{nome}</h1>
						<p>{descricao}</p>
					</div>
					<div className='requisitos-container'>
						<div className='requisitos'>
							<h1>Requisitos</h1>
							{gera}
						</div>
						<Button className='requisitos-btn'>
							Clique para ver referência
						</Button>
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
					<h1>{pontos} Pontos</h1>
				</div>
			</div>
		</div>
	)
}
