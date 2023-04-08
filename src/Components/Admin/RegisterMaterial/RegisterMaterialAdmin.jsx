import Button from '../../Utils/Button/Button'
import Faixa from '../../Utils/Faixa/Faixa'
import Input from '../../Utils/Input/Input'
import './RegisterMaterialAdmin.scss'

export default function RegisterMaterialAdmin() {
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
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Descrição: (Obrigatório)'
							type='text'
							placeholder='Descreva o material para todos os usuários'
							required
							color='verde'
						/>
					</div>
				</div>

				<div className='upload-container'>
					<div className='upload-input-container'>
						<div className='upload-image'>
							<img
								src='assets/nuvem-download.svg'
								alt='material-upload'
							/>
						</div>
						<Input
							label='Adicione link do vídeo:'
							type='text'
							placeholder='Link para o vídeo'
							required
							color='verde'
						/>
					</div>
				</div>
			</form>
			<div className='register-btn-container'>
				<Button type='submit' buttonType='verde'>
					Enviar
				</Button>
			</div>
		</>
	)
}
