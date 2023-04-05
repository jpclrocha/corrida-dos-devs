import StudyMaterialModal from './StudyMaterialModal.jsx'
import './StudyMaterialPlaylist.scss'

export default function StudyMaterialPlaylist() {
	const curso = {
		nome: 'HTML, CSS e JS',
		descricao:
			'Trilha de conhecimento para primeiro contato com a programação',
		ideal: 'Ideal para você que está começando do absoluto zero na programação se familiarizar com esse incrível universo',
		conteudo: [
			{ titulo: 'Fundamentos básicos', id: 1 },
			{ titulo: 'Pensamento computacional', id: 2 },
			{ titulo: 'Programação Web', id: 3 },
			{ titulo: 'E muito mais conteúdo pra explorar!', id: 4 },
		],
		rota: '/materiais',
	}
	return (
		<div className='study-material-playlist-container'>
			<h1 className='study-material-playlist-title'>
				Materiais de estudo:
			</h1>
			<StudyMaterialModal curso={curso} />
			<StudyMaterialModal curso={curso} />
		</div>
	)
}
