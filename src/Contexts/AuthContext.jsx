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
				const attUser = await api.get(
					`/usersbylogin/${storageUser.userName}`
				)
				if (storageUser !== attUser.data) {
					setUser(attUser.data)
				}
			}
		}
		loadingStorageData()
	}, [])

	const signIn = async ({ login, password }) => {
		const request = await api.post('/login', { login, password })

		if (request.data.message) {
			alert(request.data.message)
		} else {
			const userObj = await api.get(`/usersbylogin/${login}`)

			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${request.data.JWT}`
			localStorage.setItem('@Auth:token', request.data.JWT)
			localStorage.setItem('@Auth:user', JSON.stringify(userObj.data))
			setUser(userObj.data)
		}
	}

	const signOut = () => {
		localStorage.clear()
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}
