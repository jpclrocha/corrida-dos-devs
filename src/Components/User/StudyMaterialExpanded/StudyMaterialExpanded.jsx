import Faixa from '../../Utils/Faixa/Faixa'
import Descricao from './Descricao/Descricao'
import Preview from './Preview/Preview'
import './StudyMaterialExpanded.scss'

export default function StudyMaterialExpanded() {
	const curso = {
		materialId: 1,
		materialTitle: 'HTML, CSS e JS',
		materialDetailedInformation:
			'Você vai construir os primeiros conhecimentos sobre programação e tecnologia. Desde a diferenciação entre hardware e software, internet e seu papel no desenvolvimento, até o pensamento computacional e lógico, passando por tipos de aplicações web e linguagem de programação. Este é o lugar para aprender sobre o funcionamento de sistemas operacionais e a escolha do melhor sistema operacional pra você. Você vai ganhar clareza sobre as bases da programação para web e aprender palavras e conceitos desse novo universo.',
		materialShortInformation:
			'Trilha de conhecimento para primeiro contato com a programação',
		materialIdealFor:
			'Ideal para você que está começando do absoluto zero na programação se familiarizar com esse incrível universo',
		materialVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
		mateiralContentList: [
			{ title: 'Fundamentos básicos', id: 1 },
			{ title: 'Pensamento computacional', id: 2 },
			{ title: 'Programação Web', id: 3 },
			{ title: 'E muito mais conteúdo pra explorar!', id: 4 },
		],
	}

	return (
		<div className='expanded-container'>
			<Faixa {...curso} colorType='verde' />
			<Preview {...curso} />
			<Descricao {...curso} />
		</div>
	)
}
