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
				const userChallengesResponse = await api.get(
					`/challengesresponse/${storageUser.id}`
				)
				const userRule = await api.get(`/category/${storageUser.id}`)
				const socialName = await api.get(
					`/socialnetwork/${storageUser.id}`
				)

				const attUser = {
					...storageUser,
					userChallengesResponse: userChallengesResponse.data,
					userRule: userRule.data,
					socialName: socialName.data,
				}
				setUser(attUser)
			}
		}
		loadingStorageData()
	}, [])

	const signIn = async ({ login, password }) => {
		const response = await api.post('/login', { login, password })

		if (response.data.message === 'Crendenciais inválidas') {
			alert(response.data.message)
		} else {
			const teste = await api.get(`/usersbylogin/${login}`)
			const userChallengesResponse = await api.get(
				`/challengesresponse/${teste.data[0].id}`
			)
			const userRule = await api.get(`/category/${teste.data[0].id}`)
			const socialName = await api.get(
				`/socialnetwork/${teste.data[0].id}`
			)

			const userObj = {
				...teste.data[0],
				userChallengesResponse: userChallengesResponse.data,
				userRule: userRule.data,
				socialName: socialName.data,
			}
			console.log(userObj)
			setUser(JSON.stringify(teste.data[0]))
			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.JWT}`
			localStorage.setItem('@Auth:token', response.data.JWT)
			localStorage.setItem('@Auth:user', JSON.stringify(teste.data[0]))
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
