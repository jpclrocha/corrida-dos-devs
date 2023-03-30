import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage.jsx'
import Ranking from '../Pages/Ranking'

import './App.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
		errorElement: <></>,
		children: [
			{
				path: '/ranking',
				element: <Ranking />,
				errorElement: <></>,
			},
			{
				path: '/cadastro',
			},
			{
				path: '/login',
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
