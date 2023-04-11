import image from '../../../assets/nuvem-download.svg'
import Button from '../../Utils/Button/Button'
import Faixa from '../../Utils/Faixa/Faixa'
import Input from '../../Utils/Input/Input'
import './RegisterChallengeAdmin.scss'

export default function RegisterChallengeAdmin() {
	return (
		<>
			<Faixa
				colorType='cinza'
				materialTitle='Adicionar desafio semanal:'
			/>
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

					<div className='register-material-input'>
						<Input
							label='Requisitos: (Se mais de 1, separe por ponto e vírgula (;) )'
							type='text'
							placeholder='Descreva os requisitos que os participantes devem seguir para serem avaliados corretamente'
							required
							color='verde'
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Quantidade de pontos:'
							type='number'
							placeholder='Quanto vale o desafio'
							required
							color='verde'
						/>
					</div>
				</div>

				<div className='upload-container'>
					<div className='upload-input-container'>
						<div className='upload-image'>
							<img src={image} alt='material-upload' />
						</div>
						<Input
							label='Adicione o link para a referência'
							type='text'
							placeholder='Link para a referência'
							required
							color='verde'
						/>
					</div>

					<div className='register-material-input'>
						<Input
							label='Data final de entrega:'
							type='date'
							required
							color='verde'
						/>
					</div>

					<Button type='submit' buttonType='verde'>
						Enviar
					</Button>
				</div>
			</form>
		</>
	)
}
