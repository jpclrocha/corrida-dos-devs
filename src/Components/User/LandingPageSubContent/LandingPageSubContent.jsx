import { Link } from 'react-router-dom'
import Button from '../../Utils/Button/Button'
import './LandingPageSubContent.scss'

export default function LandingPageSubContent() {
	return (
		<div className='landing-page-sub-content-container'>
			<div className='sub-content-text-container'>
				<h1 className='sub-content-title'>
					<span className='text-verde'>Corrida dos DEVs</span>, site
					que pretende avaliar objetivamente estudantes de
					programação;
				</h1>
				<p className='sub-content-text'>
					também temos como objetivo estimular o desenvolvimento
					acadêmico para construir profissionais de qualidade.
				</p>
			</div>
			<Link to='/ranking'>
				<Button buttonType={'verde'}>Confira o Ranking</Button>
			</Link>
		</div>
	)
}
