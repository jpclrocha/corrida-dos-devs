import StudyMaterialModal from './StudyMaterialModal.jsx'
import './StudyMaterialPlaylist.scss'

export default function StudyMaterialPlaylist() {
	const curso = [
		{
			MaterialId: 1,
			MaterialTitle: 'HTML, CSS e JS',
			MaterialDetailedInformation:
				'Você vai construir os primeiros conhecimentos sobre programação e tecnologia. Desde a diferenciação entre hardware e software, internet e seu papel no desenvolvimento, até o pensamento computacional e lógico, passando por tipos de aplicações web e linguagem de programação. Este é o lugar para aprender sobre o funcionamento de sistemas operacionais e a escolha do melhor sistema operacional pra você. Você vai ganhar clareza sobre as bases da programação para web e aprender palavras e conceitos desse novo universo.',
			MaterialShortInformation:
				'Trilha de conhecimento para primeiro contato com a programação',
			MaterialIdealFor:
				'Ideal para você que está começando do absoluto zero na programação se familiarizar com esse incrível universo',
			MaterialVideoUrl:
				'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
			MateiralContentList: [
				{ title: 'Fundamentos básicos', id: 1 },
				{ title: 'Pensamento computacional', id: 2 },
				{ title: 'Programação Web', id: 3 },
				{ title: 'E muito mais conteúdo pra explorar!', id: 4 },
			],
		},
	]

	return (
		<div className='study-material-playlist-container'>
			<h1 className='study-material-playlist-title'>
				Materiais de estudo:
			</h1>
			{curso.map((materialInfo) => {
				return (
					<StudyMaterialModal
						{...materialInfo}
						key={materialInfo.MaterialId}
					/>
				)
			})}
		</div>
	)
}
