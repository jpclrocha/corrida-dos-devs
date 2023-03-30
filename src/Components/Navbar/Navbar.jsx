import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import './Navbar.scss'

export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<nav className='navbar-container'>
				<div className='navbar-logo-link'>
					<Link to={'/'} className='link-router'>
						Corrida dos DEVs
						<img
							src='assets/logo.svg'
							alt='Corrida-dos-devs-logo'
							className='navbar-logo'
						/>
					</Link>
				</div>
				<ul className='navbar-list'>
					<div className='navbar-list-item'>
						<li>
							<Link
								to={'ranking'}
								className='navbar-list-item-link'
							>
								Ranking
							</Link>
						</li>
					</div>

					<div className='navbar-list-item'>
						<li>
							<Link
								to={'cadastro'}
								className='navbar-list-item-link'
							>
								Cadastro
							</Link>
						</li>
					</div>

					<div className='navbar-last-item navbar-list-item'>
						<li>
							<Link
								to={'login'}
								className='navbar-list-item-link'
							>
								Login
							</Link>
						</li>
					</div>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}
