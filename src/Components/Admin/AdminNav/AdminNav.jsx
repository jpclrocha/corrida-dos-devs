import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logoBranca.svg'
import Button from '../../Utils/Button/Button'
import './AdminNav.scss'

export default function AdminNav() {
	const [isNavExpanded, setIsNavExpanded] = useState()
	return (
		<nav className='admin-nav'>
			<div className='teste'>
				<Link to={'/'} className='admin-navbar-logo-link'>
					<img
						src={logo}
						alt='Corrida-dos-devs-logo'
						className='admin-navbar-logo'
					/>
					Olá, fulan@
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
					isNavExpanded
						? 'admin-navbar-list expanded'
						: 'admin-navbar-list'
				}
			>
				<li className='admin-navbar-list-item'>
					<Link to='/admin' className='admin-navbar-list-item-link'>
						Home
					</Link>
				</li>
				<li className='admin-navbar-list-item'>
					<Link to='/ranking' className='admin-navbar-list-item-link'>
						Ranking
					</Link>
				</li>

				<li className='admin-navbar-list-item'>
					<Link
						to='/materials'
						className='admin-navbar-list-item-link'
					>
						Material
					</Link>
				</li>

				<li className='admin-navbar-last-item admin-navbar-list-item'>
					<Link
						to='/myaccount'
						className='admin-navbar-list-item-link'
					>
						Minha conta
					</Link>
				</li>
			</ul>
		</nav>
	)
}
