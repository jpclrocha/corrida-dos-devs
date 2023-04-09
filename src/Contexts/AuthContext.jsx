import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loadingStorageData = async () => {
			const storageUser = JSON.parse(localStorage.getItem('@Auth:user'))
			const storageToken = JSON.parse(localStorage.getItem('@Auth:token'))

			if (storageUser && storageToken) {
				setUser(storageUser)
			}
		}
		loadingStorageData()
	}, [])

	const signIn = async ({ login, password }) => {
		const response = await api.post('/login', { login, password })

		if (response.data.error) {
			alert(response.data.errorr)
		} else {
			setUser(response.data)
			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.JWT}`
			localStorage.setItem('@Auth:token', response.data.JWT)
			localStorage.setItem('@Auth:user', response.data.user)
		}
	}

	return (
		<AuthContext.Provider value={{ user, signed: !!user, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}
