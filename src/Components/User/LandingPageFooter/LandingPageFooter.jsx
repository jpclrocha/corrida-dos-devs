import './LandingPageFooter.scss'

export default function LandingPageFooter() {
	const footer = [
		'Sobre Nós',
		'Política de Privacidade',
		'Termos e Condições',
	]

	return (
		<div className='landing-page-footer-container'>
			<div className='landing-page-footer-line'></div>
			<ul className='landing-page-footer-list'>
				{footer.map((item) => {
					return (
						<li
							className='landing-page-footer-list-item'
							key={item}
						>
							{item}
						</li>
					)
				})}
			</ul>
			<div className='landing-page-footer-line'></div>
		</div>
	)
}
