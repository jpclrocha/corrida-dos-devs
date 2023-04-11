import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Utils/Button/Button'
import Input from '../../Utils/Input/Input'
import './SignUpForm.scss'

const initUser = {
	userName: '',
	userEmail: '',
	userPassword: '',
	userPasswordConfirm: '',
	userBio: '',
	userRankPoints: 0,
}

export default function SignUpForm() {
	const [user, setUser] = useState(initUser)

	const handleChange = (event) => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(user)
		if (user.userPassword === user.userPasswordConfirm) {
		}
		//alert('Passwords do not match')
	}

	return (
		<form className='signup-form-container' onSubmit={handleSubmit}>
			<Input
				label='Nome Completo:'
				type='text'
				name='userName'
				value={user.userName}
				placeholder='Digite seu nome completo'
				onChange={handleChange}
			/>

			<Input
				label='Email:'
				type='email'
				name='userEmail'
				value={user.userEmail}
				placeholder='Digite seu email'
				onChange={handleChange}
			/>

			<Input
				label='Senha:'
				type='password'
				name='userPassword'
				value={user.userPassword}
				placeholder='Digite sua senha'
				onChange={handleChange}
			/>

			<Input
				label='Digite sua senha novamente:'
				type='password'
				name='userPasswordConfirm'
				value={userPasswordConfirm}
				placeholder='Confirme sua senha'
				onChange={handleChange}
			/>

			<Link to='myaccount'>
				<Button type='submit' buttonType='verde' onClick={handleSubmit}>
					Cadastrar
				</Button>
			</Link>

			<h1 className='text-center'>
				Já tem conta?
				<Link to='/login' className='sign-up'>
					Entrar
				</Link>
			</h1>
		</form>
	)
}
