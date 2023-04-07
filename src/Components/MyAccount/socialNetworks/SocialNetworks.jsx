import './SocialNetworks.scss'

export default function SocialNetworks({ userSocialNetworks }) {
	const generator = userSocialNetworks?.map((social) => {
		return <h1 className='social-text'> @{social}</h1>
	})
	return (
		<div className='social-container'>
			<h1 className='social-title'>Minhas Redes</h1>
			{generator}
		</div>
	)
}
