import './SocialNetworks.scss'

export default function SocialNetworks({ userSocialNetworks }) {
	const generator = userSocialNetworks?.map((social) => {
		return (
			<h1 className='social-text' key={social}>
				{' '}
				@{social}
			</h1>
		)
	})
	return (
		<div className='social-container'>
			<h1 className='social-title'>Minhas Redes</h1>
			{generator ? (
				generator
			) : (
				<h1 className='social-text'>Sem redes sociais</h1>
			)}
		</div>
	)
}
