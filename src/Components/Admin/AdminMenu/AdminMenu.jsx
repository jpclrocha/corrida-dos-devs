import './AdminMenu.scss'
import CardAdmin from './CardAdmin'

export default function AdminMenu() {
	return (
		<div className='admin-menu-container'>
			<h1 className='admin-title'>Espaço Administrador:</h1>

			<CardAdmin
				title='Gerenciar usuários'
				image='assets/certo.svg'
				textBtn='Gerenciar!'
				route='/manageUsers'
			/>

			<CardAdmin
				title='Adicionar material'
				image='assets/livro.svg'
				textBtn='Adicionar!'
				route='/registerMaterial'
			/>

			<CardAdmin
				title='Gerenciar materiais'
				image='assets/certo.svg'
				textBtn='Gerenciar!'
				route='/manageMaterial'
			/>

			<CardAdmin
				title='Adicionar desafios semanais'
				image='assets/raio.svg'
				textBtn='Adicionar!'
				route='/registerChallenge'
			/>

			<CardAdmin
				title='Corrigir desafios semanais'
				image='assets/certo.svg'
				textBtn='Corrigir!'
				route='/rateChallenge'
			/>
		</div>
	)
}
