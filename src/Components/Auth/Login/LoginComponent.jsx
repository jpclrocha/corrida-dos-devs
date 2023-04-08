import { Link } from 'react-router-dom'
import Rodape from '../Rodape/Rodape'
import './LoginComponent.scss'
import LoginForm from './LoginForm'

export default function LoginComponent() {
	return (
		<div>
			<div className='login-container'>
				<div className='login-logo'>
					<Link to='/' className='login-link'>
						Corrida dos DEVs
						<img
							src='assets/logoBranca.svg'
							alt='Corrida-dos-devs-logo'
							className='login-img'
						/>
					</Link>

					<h1 className='login-title'>
						Faça seu login na plataforma
					</h1>
				</div>

				<LoginForm />
			</div>

			<Rodape />
		</div>
	)
}
