import { useState } from 'react'
import ReactModal from 'react-modal'
import { api } from '../../../../services/api'
import Button from '../../../Utils/Button/Button'
import Input from '../../../Utils/Input/Input'
import './AboutMe.scss'

const defaultBio = {
	userBio: '',
	userId: '',
}

export default function AboutMe({ userBio, id }) {
	const [bioEdit, setBioEdit] = useState('')
	const [modal, setModal] = useState(false)

	const openModal = () => {
		setModal(!modal)
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setBioEdit({ ...bioEdit, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const patchUser = {
			userId: id,
			patchColumn: 'userBio',
			valueColumn: bioEdit.userBio,
		}

		console.log(patchUser)
		await api.patch('/users', patchUser)
		alert('Alterado com sucesso')
		window.location.reload()
	}

	return (
		<div className='aboutme-container'>
			<div className='modal-teste'>
				<h1 className='aboutme-title'>Sobre mim</h1>
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
							marginLeft: '30vw',
							width: '60vw',
							height: 'fit-content',
							color: 'lightsteelblue',
						},
					}}
				>
					<Input
						label='Editar sobre mim'
						placeholder='Digite uma descrição sobre você mesmo!'
						type='text'
						name='userBio'
						value={bioEdit.userBio}
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
			<p className='aboutme-text'>
				{userBio ? userBio : 'Sem descrição adicionada!'}
			</p>
		</div>
	)
}
