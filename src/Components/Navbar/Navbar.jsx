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

				<Button
					className={isNavExpanded ? 'hamburger rotate' : 'hamburger'}
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

				<ul
					className={
						isNavExpanded ? 'navbar-list expanded' : 'navbar-list'
					}
				>
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
