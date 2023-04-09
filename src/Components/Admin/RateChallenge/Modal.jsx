import certo from '../../../assets/certoDesafio.svg'
import image from '../../../assets/ft-perfil.svg'
import './Modal.scss'
export default function Modal({ userName, challengeLinkResponse }) {
	return (
		<div className='rate-modal-container'>
			<div className='rate-userinfo-container'>
				<div className='rate-img-container'>
					<img
						src={image}
						alt='Foto de perfil'
						className='rate-img'
					/>
				</div>

				<div className='rate-info'>
					<h1 className='rate-username'>{userName}</h1>
					<a
						href={`https://${challengeLinkResponse}`}
						target='_blank'
						className='rate-challenge-link'
						rel='noreferrer'
					>
						Link: {challengeLinkResponse}
					</a>
				</div>
			</div>
			<div className='rate-challenge-button'>
				<img src={certo} alt='Foto de perfil' className='rate-button' />
			</div>
		</div>
	)
}
