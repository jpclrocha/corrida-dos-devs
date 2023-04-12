import { useState } from 'react'
import ReactModal from 'react-modal'
import { api } from '../../../../services/api'
import Button from '../../../Utils/Button/Button'
import Input from '../../../Utils/Input/Input'
import './SocialNetworks.scss'

export default function SocialNetworks({ socialName, id }) {
	const [socialEdit, setSocialEdit] = useState('')
	const [modal, setModal] = useState(false)

	const openModal = () => {
		setModal(!modal)
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setSocialEdit({ ...socialEdit, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const list = socialEdit.socialName.split('; ')

		list.map((item) => {
			api.post('/socialnetwork', {
				socialName: item,
				userId: id,
			})
		})

		alert('Alterado com sucesso')
		window.location.reload()
	}

	return (
		<div className='social-container'>
			<div className='modal-teste'>
				<h1 className='social-title'>Minhas Redes</h1>
				<Button
					buttonType='verde'
					onClick={openModal}
					className='btn-modal'
				>
					Editar
				</Button>
				<ReactModal
					isOpen={modal}
					onRequestClose={openModal}
					contentLabel='teste'
					bodyOpenClassName='modal-content'
					ariaHideApp={false}
					style={{
						overlay: {
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
						},
						content: {
							margin: '0 auto',
							marginTop: '30vh',
							width: '60vw',
							height: 'fit-content',
							color: 'lightsteelblue',
						},
					}}
				>
					<Input
						label='Editar redes sociais (se escrever mais de 1, separe por ; )'
						placeholder='Digite uma descrição sobre você mesmo!'
						type='text'
						name='socialName'
						value={socialEdit.socialName}
						onChange={handleChange}
					/>
					<Button
						buttonType='verde'
						onClick={handleSubmit}
						style={{ marginBottom: '2vh' }}
					>
						Enviar
					</Button>
				</ReactModal>
			</div>
			{socialName?.length ? (
				socialName.map((social) => {
					return (
						<h1 className='social-text' key={social.socialName}>
							{social.socialName}
						</h1>
					)
				})
			) : (
				<h1 className='social-text'>Sem redes sociais</h1>
			)}
		</div>
	)
}
