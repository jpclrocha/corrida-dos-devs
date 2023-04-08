import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from '../Pages/Admin.jsx'
import Challenge from '../Pages/Challenge.jsx'
import LandingPage from '../Pages/LandingPage.jsx'
import Login from '../Pages/Login.jsx'
import Ranking from '../Pages/Ranking'
import SignUp from '../Pages/SignUp.jsx'
import StudyMaterial from '../Pages/StudyMaterial.jsx'
import StudyMaterialPlaylist from '../Pages/StudyMaterialPlaylist.jsx'
import UserAccount from '../Pages/UserAccount.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
		errorElement: <></>,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <></>,
	},
	{
		path: '/signup',
		element: <SignUp />,
		errorElement: <></>,
	},

	{
		path: '/ranking',
		element: <Ranking />,
		errorElement: <></>,
	},
	{
		path: '/challenges',
		element: <Challenge />,
		errorElement: <></>,
	},
	{
		path: '/materials',
		element: <StudyMaterialPlaylist />,
		errorElement: <></>,
	},
	{
		path: '/teste',
		element: <StudyMaterial />,
		errorElement: <></>,
	},
	{
		path: '/myaccount',
		element: <UserAccount />,
		errorElement: <></>,
	},
	{
		path: '/admin',
		element: <Admin />,
		errorElement: <></>,
	},
	{
		path: '/manageUsers',
		element: <></>,
		errorElement: <></>,
	},
	{
		path: '/registerMaterial',
		element: <></>,
		errorElement: <></>,
	},
	{
		path: '/manageMaterial',
		element: <></>,
		errorElement: <></>,
	},
	{
		path: '/registerChallenge',
		element: <></>,
		errorElement: <></>,
	},
	{
		path: '/rateChallenge',
		element: <></>,
		errorElement: <></>,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
