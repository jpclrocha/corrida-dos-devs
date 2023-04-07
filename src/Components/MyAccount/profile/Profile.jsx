import './Profile.scss'
export default function Profile({ userName, userRankPoints }) {
	return (
		<div className='profile-container'>
			<img
				src='assets/ft-perfil.svg'
				alt='Foto de perfil'
				className='profile-image'
			/>
			<h1 className='profile-username'>{userName}</h1>
			<div className='line'></div>
			<h1 className='profile-points'>
				Pontuação no ranking:{userRankPoints}
			</h1>
		</div>
	)
}
