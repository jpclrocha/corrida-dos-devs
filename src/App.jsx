import { AuthProvider } from './Contexts/AuthContext'
import AppRouter from './Routes/AppRouter'

export const App = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	)
}
