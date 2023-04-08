import { Link } from 'react-router-dom'
import './Rodape.scss'

export default function Rodape() {
	return (
		<div className='rodape-lg'>
			<Link to={'/'} className='rodape-link'>
				Copyright &#169; 2022 | Corrida dos Dev's
			</Link>
		</div>
	)
}
