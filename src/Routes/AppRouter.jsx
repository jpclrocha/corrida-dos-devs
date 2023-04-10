import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from '../Components/Utils/Navbar/Navbar.jsx'
import Admin from '../Pages/Admin.jsx'
import Challenge from '../Pages/Challenge.jsx'
import LandingPage from '../Pages/LandingPage.jsx'
import Login from '../Pages/Login.jsx'
import Ranking from '../Pages/Ranking'
import RateChallenge from '../Pages/RateChallenge.jsx'
import RegisterChallenge from '../Pages/RegisterChallenge.jsx'
import RegisterMaterial from '../Pages/RegisterMaterial.jsx'
import SignUp from '../Pages/SignUp.jsx'
import StudyMaterial from '../Pages/StudyMaterial.jsx'
import StudyMaterialPlaylist from '../Pages/StudyMaterialPlaylist.jsx'
import UserAccount from '../Pages/UserAccount.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'signup',
				element: <SignUp />,
			},

			{
				path: 'ranking',
				element: <Ranking />,
			},
			{
				path: 'challenges',
				element: <Challenge />,
			},
			{
				path: 'materials',
				element: <StudyMaterialPlaylist />,
			},
			{
				path: '/materials/:id',
				element: <StudyMaterial />,
			},
			{
				path: 'myaccount',
				element: <UserAccount />,
			},
			{
				path: 'admin',
				element: <Admin />,
			},
			{
				path: 'registerMaterial',
				element: <RegisterMaterial />,
			},
			{
				path: 'registerChallenge',
				element: <RegisterChallenge />,
			},
			{
				path: 'rateChallenge',
				element: <RateChallenge />,
			},
			{
				path: 'manageUsers',
				element: <></>,
			},
			{
				path: 'manageMaterial',
				element: <></>,
			},
		],
	},
])

export default function AppRouter() {
	return <RouterProvider router={router} />
}
