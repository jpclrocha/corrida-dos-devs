import { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthContext'
import './MyAccount.scss'
import AboutMe from './aboutMe/AboutMe'
import Challenges from './challenges/Challenges'
import Profile from './profile/Profile'
import SocialNetworks from './socialNetworks/SocialNetworks'

export default function MyAccount() {
	const { user } = useContext(AuthContext)

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
