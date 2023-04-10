import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loadingStorageData = async () => {
			const storageUser = JSON.parse(localStorage.getItem('@Auth:user'))
			const storageToken = localStorage.getItem('@Auth:token')

			if (storageUser && storageToken) {
				setUser(storageUser)
			}
		}
		loadingStorageData()
	}, [])

	const signIn = async ({ login, password }) => {
		const response = await api.post('/login', { login, password })

		if (response.data.message === 403) {
			alert('Credenciais incorretas!')
		} else {
			const teste = await api.get(`/usersbylogin/${login}`)
			setUser(JSON.stringify(teste.data[0]))
			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.JWT}`
			localStorage.setItem('@Auth:token', response.data.JWT)
			localStorage.setItem('@Auth:user', JSON.stringify(teste.data[0]))
		}
	}

	return (
		<AuthContext.Provider value={{ user, signed: !!user, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}
