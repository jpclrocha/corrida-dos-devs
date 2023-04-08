import { Link } from 'react-router-dom'
import Button from '../../Utils/Button/Button'
import './CardAdmin.scss'

export default function CardAdmin({ image, title, route, textBtn }) {
	return (
		<div className='card-admin-container'>
			<div className='card-admin-image-container'>
				<img
					src={image}
					alt='Corrida-dos-devs-logo'
					className='admin-image'
				/>
				<h1 className='card-admin-title'>{title}</h1>
			</div>
			<Link to={route} className='admin-btn'>
				<Button type='submit' buttonType='verde'>
					{textBtn}
				</Button>
			</Link>
		</div>
	)
}
