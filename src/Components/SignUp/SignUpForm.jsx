import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './SignUpForm.scss'

export default function SignUpForm() {
	const initUser = {
		id: null,
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	}

	const [user, setUser] = useState(initUser)

	const handleChange = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = (e) => {}

	return (
		<form className='signup-form-container'>
			<Input
				label='Nome Completo:'
				type='text'
				name='name'
				value={user.name}
				placeholder='Digite seu nome completo'
				onChange={handleChange}
			/>

			<Input
				label='Email:'
				type='email'
				name='email'
				value={user.email}
				placeholder='Digite seu email'
				onChange={handleChange}
			/>

			<Input
				label='Senha:'
				type='password'
				name='password'
				value={user.password}
				placeholder='Digite sua senha'
				onChange={handleChange}
			/>

			<Input
				label='Digite sua senha novamente:'
				type='password'
				name='passwordConfirm'
				value={user.passwordConfirm}
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
