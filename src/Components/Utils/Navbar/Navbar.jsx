import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthContext'
import Button from '../Button/Button'
import DarkMode from '../DarkMode/DarkMode'
import './Navbar.scss'

export default function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false)
	const { signed, signOut, user } = useContext(AuthContext)

	const toggleNav = () => {
		setIsNavExpanded(!isNavExpanded)
		document.body.style.overflow = isNavExpanded ? 'unset' : 'hidden'
	}

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
					<DarkMode />
					<Button className='hamburger' onClick={toggleNav}>
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
				{signed ? (
					<ul
						className={
							isNavExpanded
								? 'navbar-list expanded'
								: 'navbar-list'
						}
					>
						<li className='navbar-list-item'>
							<Link
								to={'/ranking'}
								className='navbar-list-item-link'
							>
								Ranking
							</Link>
						</li>

						<li className='navbar-list-item'>
							<Link
								to={'/materials'}
								className='navbar-list-item-link'
							>
								Material
							</Link>
						</li>

						<li className='navbar-list-item'>
							<Link
								to='/myaccount'
								className='navbar-list-item-link'
							>
								Minha conta
							</Link>
						</li>

						{user.userRule === 1 ? (
							<li className='navbar-list-item'>
								<Link
									to='/admin'
									className='navbar-list-item-link'
								>
									Admin
								</Link>
							</li>
						) : (
							''
						)}

						<button className='logout-btn' onClick={signOut}>
							Sair
						</button>
					</ul>
				) : (
					<ul
						className={
							isNavExpanded
								? 'navbar-list expanded'
								: 'navbar-list'
						}
					>
						<li className='navbar-list-item'>
							<Link
								to={'/ranking'}
								className='navbar-list-item-link'
							>
								Ranking
							</Link>
						</li>

						<li className='navbar-list-item'>
							<Link
								to={'/signup'}
								className='navbar-list-item-link'
							>
								Cadastro
							</Link>
						</li>

						<li className='navbar-last-item navbar-list-item'>
							<Link to='/login' className='navbar-list-item-link'>
								Login
							</Link>
						</li>
					</ul>
				)}
			</nav>
			<Outlet />
		</>
	)
}
