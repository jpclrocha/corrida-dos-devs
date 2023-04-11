import './SocialNetworks.scss'

export default function SocialNetworks({ socialName }) {
	return (
		<div className='social-container'>
			<h1 className='social-title'>Minhas Redes</h1>
			{socialName?.length ? (
				socialName.map((social) => {
					return (
						<h1 className='social-text' key={social.socialName}>
							{social.socialName}
						</h1>
					)
				})
			) : (
				<h1 className='social-text'>Sem redes sociais</h1>
			)}
		</div>
	)
}
