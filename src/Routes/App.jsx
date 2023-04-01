import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage.jsx'
import Ranking from '../Pages/Ranking'

import './App.scss'
import Navbar from '../Components/Navbar/Navbar.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		errorElement: <></>,
		children: [
			{
				index: true,
				element: <LandingPage />,
				errorElement: <></>,
			},
			{
				path: 'ranking',
				element: <Ranking />,
				errorElement: <></>,
			},
			{
				path: 'cadastro',
			},
			{
				path: 'login',
			},
		],
	},
])

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
