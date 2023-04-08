import { Link } from 'react-router-dom'
import Rodape from '../Rodape/Rodape'
import './SignUpComponent.scss'
import SignUpForm from './SignUpForm'

export default function SignUpComponent() {
	return (
		<div>
			<div className='sign-up-container'>
				<SignUpForm />

				<div className='signup-logo'>
					<Link to='/' className='signup-link'>
						Corrida dos DEVs
						<img
							src='assets/logoBranca.svg'
							alt='Corrida-dos-devs-logo'
							className='signup-img'
						/>
					</Link>

					<h1 className='signup-title'>
						Acione o start e comece a corrida para a evolução
					</h1>
					<p className='signup-text'>
						Entre para a corrida dos devs e acelere na direção dos
						seus objetivos
					</p>
				</div>
			</div>
			<Rodape />
		</div>
	)
}
