import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api.corrida-dos-devs.repl.co',
})
