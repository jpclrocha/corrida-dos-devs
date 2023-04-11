import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthContext'
import Button from '../../Utils/Button/Button'
import Input from '../../Utils/Input/Input'
import './LoginForm.scss'

const defaultLogin = {
	login: '',
	password: '',
}

export default function LoginForm() {
	const [data, setData] = useState(defaultLogin)
	const { login, password } = data
	const { signIn, signed } = useContext(AuthContext)
	const navigate = useNavigate()

	const onChangeHandler = (event) => {
		const { name, value } = event.target
		setData({ ...data, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		await signIn(data)
		if (signed) return navigate('/myaccount')
	}

	return (
		<form className='login-form-container' onSubmit={handleSubmit}>
			<Input
				label='Login:'
				type='text'
				placeholder='Digite seu usuario aqui'
				name='login'
				value={login}
				onChange={onChangeHandler}
			/>
			<Input
				label='Senha:'
				type='password'
				placeholder='Digite sua senha aqui'
				name='password'
				value={password}
				onChange={onChangeHandler}
			/>
			<Link to='/esqueciSenha' className='forgot-password'>
				Esqueci minha senha
			</Link>

			<Button type='submit' buttonType='verde'>
				ENTRAR
			</Button>

			<h1 className='text-center'>
				Não tem conta?
				<Link to='/signup' className='sign-up'>
					Criar conta
				</Link>
			</h1>
		</form>
	)
}
