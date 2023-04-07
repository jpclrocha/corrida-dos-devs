import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Challenge from '../Pages/Challenge.jsx'
import LandingPage from '../Pages/LandingPage.jsx'
import Login from '../Pages/Login.jsx'
import Ranking from '../Pages/Ranking'
import StudyMaterial from '../Pages/StudyMaterial.jsx'
import StudyMaterialPlaylist from '../Pages/StudyMaterialPlaylist.jsx'
import UserAccount from '../Pages/UserAccount.jsx'

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
			{
				path: 'myaccount',
				element: <UserAccount />,
				errorElement: <></>,
			},
		],
	},
	{
		path: 'login',
		element: <Login />,
		errorElement: <></>,
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
