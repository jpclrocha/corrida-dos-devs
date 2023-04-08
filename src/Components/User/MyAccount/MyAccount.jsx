import './MyAccount.scss'
import AboutMe from './aboutMe/AboutMe'
import Challenges from './challenges/Challenges'
import Profile from './profile/Profile'
import SocialNetworks from './socialNetworks/SocialNetworks'

export default function MyAccount() {
	const user = {
		id: 8,
		userName: 'DSerao Montegrego',
		userBio: 'Eu acho que nao sobe.',
		userEmail: 'Goldorayl@gmail.com',
		userRankPoints: 19,
		userSocialNetworks: ['jpclrocha', 'teste'],
	}
	return (
		<div className='myaccount-container'>
			<div className='teste'>
				<Profile {...user} />
				<div className='info-container'>
					<AboutMe {...user} />
					<Challenges {...user} />
					<SocialNetworks {...user} />
				</div>
			</div>
		</div>
	)
}
