import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
	return (
		<nav className='navbar-container'>
			<div className='navbar-logo-link'>
				Corrida dos DEVs
				<img
					src='logo.svg'
					alt='Corrida-dos-devs-logo'
					className='navbar-logo'
				/>
			</div>
			<ul className='navbar-list'>
				<div className='navbar-list-item'>
					<li>Ranking</li>
				</div>

				<div className='navbar-list-item'>
					<li>Cadastro</li>
				</div>

				<div className='navbar-last-item navbar-list-item'>
					<li>Login</li>
				</div>
			</ul>
		</nav>
	)
}
