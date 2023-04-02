import './ChallengeComponent.scss'
import ChallengeModal from './ChallengeModal'

export default function ChallengeComponent() {
	const desafioSemanal = {
		nome: 'Desafio calculadora',
		descricao: 'Objetivo: desenvolver uma calculadora web',
		requisitos: [
			{ titulo: 'Utilizar: HTML, CSS e JS;', id: 1 },
			{
				titulo: 'Ambiente de desenvolvimento a critério do usuário;',
				id: 2,
			},
		],
		pontos: 50,
		imagem: 'assets/calc.svg',
	}

	return (
		<div className='desafio-component-container'>
			<div className='titulo'>Desafio da semana:</div>
			<ChallengeModal
				nome={desafioSemanal.nome}
				descricao={desafioSemanal.descricao}
				requisitos={desafioSemanal.requisitos}
				pontos={desafioSemanal.pontos}
				imagem={desafioSemanal.imagem}
			/>
		</div>
	)
}
