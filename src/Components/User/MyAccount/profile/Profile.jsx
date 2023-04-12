import image from '../../../../assets/ft-perfil.svg'
import './Profile.scss'
export default function Profile({ userName, userRankPoints }) {
	const nome = userName.split(' ')
	return (
		<div className='profile-container'>
			<img src={image} alt='Foto de perfil' className='profile-image' />
			<h1 className='profile-username'>{`${nome[0]} ${
				nome[nome.length - 1]
			}`}</h1>
			<div className='line'></div>
			<h1 className='profile-points'>
				Pontuação no ranking: {userRankPoints}
			</h1>
		</div>
	)
}
