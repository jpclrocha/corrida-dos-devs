import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import './Navbar.scss'
import Button from '../Button/Button'

export default function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false)

	return (
		<>
			<nav className='navbar-container'>
				<div className='teste'>
					<Link to={'/'} className='navbar-logo-link'>
						Corrida dos DEVs
						<img
							src='assets/logo.svg'
							alt='Corrida-dos-devs-logo'
							className='navbar-logo'
						/>
					</Link>

					<Button
						className='hamburger'
						onClick={() => setIsNavExpanded(!isNavExpanded)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					</Button>
				</div>

				<ul
					className={
						isNavExpanded ? 'navbar-list expanded' : 'navbar-list'
					}
				>
					<li className='navbar-list-item'>
						<Link to={'ranking'} className='navbar-list-item-link'>
							Ranking
						</Link>
					</li>

					<li className='navbar-list-item'>
						<Link to={'cadastro'} className='navbar-list-item-link'>
							Cadastro
						</Link>
					</li>

					<li className='navbar-last-item navbar-list-item'>
						<Link to={'login'} className='navbar-list-item-link'>
							Login
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}
