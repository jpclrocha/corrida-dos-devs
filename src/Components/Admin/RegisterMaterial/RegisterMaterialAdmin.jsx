import { useState } from 'react'
import { api } from '../../../services/api'
import Button from '../../Utils/Button/Button'
import Faixa from '../../Utils/Faixa/Faixa'
import Input from '../../Utils/Input/Input'
import './RegisterMaterialAdmin.scss'

const defaultMaterial = {
	materialTitle: '',
	materialVideoUrl: '',
	materialIdealFor: '',
	materialDetailedInformation: '',
	materialShortInformation: '',
}

export default function RegisterMaterialAdmin() {
	const [listaChave, setListaChave] = useState('')

	const listaChange = (event) => {
		const { name, value } = event.target
		setListaChave({ ...listaChave, [name]: value })
	}

	const [postar, setPostar] = useState(defaultMaterial)

	const resetFormFields = () => {
		setPostar(defaultMaterial)
		setListaChave('')
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setPostar({ ...postar, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const response = await api.post('/material', postar)

		console.log(response)
		if (response.status !== 200) {
			alert('Campos invalidos')
			return
		}

		const lista = listaChave.listaChave.split(';')
		lista.map(async (item) => {
			await api.post('/materialcontent', {
				materialId: response.data[0].id,
				materialContent: item,
			})
		})

		alert('Material adicionado com sucesso')
		resetFormFields()
	}

	return (
		<>
			<Faixa colorType='cinza' materialTitle='Adicionar material:' />
			<form className='register-container'>
				<div className='register-material-input-container'>
					<div className='register-material-input'>
						<Input
							label='Título: (Obrigatório)'
							type='text'
							placeholder='Adicione um título aqui'
							required
							color='verde'
							name='materialTitle'
							value={postar.materialTitle}
							onChange={handleChange}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Conteúdo: (Obrigatório)'
							type='text'
							placeholder='Escreva o conteúdo que complementa o vídeo'
							required
							color='verde'
							name='materialDetailedInformation'
							value={postar.materialDetailedInformation}
							onChange={handleChange}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Ideal para:  (Obrigatório)'
							type='text'
							placeholder='Descreva para quem o material é adequado'
							required
							color='verde'
							name='materialIdealFor'
							value={postar.materialIdealFor}
							onChange={handleChange}
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Palavras-chave: (separe por Ponto e Vírgula ( ; )) (Obrigatório)'
							type='text'
							placeholder='Escreva palavras-chave sobre o conteúdo'
							required
							color='verde'
							name='listaChave'
							value={listaChave.listaChave}
							onChange={listaChange}
						/>
					</div>
				</div>

				<div className='upload-container'>
					<div className='upload-input-container'>
						<div className='upload-image'>
							<img
								src={'nuvem-download.svg'}
								alt='material-upload'
							/>
						</div>
						<Input
							label='Adicione link do vídeo:  (Obrigatório)'
							type='text'
							placeholder='Link para o vídeo'
							required
							color='verde'
							name='materialVideoUrl'
							value={postar.materialVideoUrl}
							onChange={handleChange}
						/>
					</div>
					<div className='register-material-input'>
						<Input
							label='Descrição:  (Obrigatório)'
							type='text'
							placeholder='Descreva o material para todos os usuários'
							required
							color='verde'
							name={'materialShortInformation'}
							value={postar.materialShortInformation}
							onChange={handleChange}
						/>
					</div>
				</div>
			</form>
			<div className='register-btn-container' onClick={handleSubmit}>
				<Button type='submit' buttonType='verde'>
					Enviar
				</Button>
			</div>
		</>
	)
}
