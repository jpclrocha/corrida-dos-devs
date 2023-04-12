import certo from '../../../assets/certo.svg'
import livro from '../../../assets/livro.svg'
import raio from '../../../assets/raio.svg'
import './AdminMenu.scss'
import CardAdmin from './CardAdmin'

export default function AdminMenu() {
	return (
		<div className='admin-menu-container'>
			<h1 className='admin-title'>Espaço Administrador:</h1>

			{/*<CardAdmin
				title='Gerenciar usuários'
				image={certo}
				textBtn='Gerenciar!'
				route='/manageUsers'
	/>*/}

			<CardAdmin
				title='Adicionar material'
				image={livro}
				textBtn='Adicionar!'
				route='/registerMaterial'
			/>

			{/*<CardAdmin
				title='Gerenciar materiais'
				image={certo}
				textBtn='Gerenciar!'
				route='/manageMaterial'
/>*/}

			<CardAdmin
				title='Adicionar desafios'
				image={raio}
				textBtn='Adicionar!'
				route='/registerChallenge'
			/>

			<CardAdmin
				title='Corrigir desafios'
				image={certo}
				textBtn='Corrigir!'
				route='/rateChallenge'
			/>
		</div>
	)
}
