import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage.jsx'
import Ranking from '../Pages/Ranking'

import Navbar from '../Components/Navbar/Navbar.jsx'
import Challenge from '../Pages/Challenge.jsx'
import StudyMaterial from '../Pages/StudyMaterial.jsx'

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
				path: 'desafio',
				element: <Challenge />,
				errorElement: <></>,
			},
			{
				path: 'materials',
				element: <StudyMaterial />,
				errorElement: <></>,
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
