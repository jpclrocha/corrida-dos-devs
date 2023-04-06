import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Challenge from '../Pages/Challenge.jsx'
import LandingPage from '../Pages/LandingPage.jsx'
import Ranking from '../Pages/Ranking'
import StudyMaterial from '../Pages/StudyMaterial.jsx'
import StudyMaterialPlaylist from '../Pages/StudyMaterialPlaylist.jsx'

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
				path: 'challenges',
				element: <Challenge />,
				errorElement: <></>,
			},
			{
				path: 'materials',
				element: <StudyMaterialPlaylist />,
				errorElement: <></>,
			},
			{
				path: 'teste',
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
