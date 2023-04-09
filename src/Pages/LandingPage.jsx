import { Outlet } from 'react-router-dom'
import LandingPageFooter from '../Components/User/LandingPageFooter/LandingPageFooter'
import LandingPageMainContent from '../Components/User/LandingPageMainContent/LandingPageMainContent'
import LandingPageSubContent from '../Components/User/LandingPageSubContent/LandingPageSubContent'
import Navbar from '../Components/Utils/Navbar/Navbar'

export default function LandingPage() {
	return (
		<>
			<LandingPageMainContent />
			<LandingPageSubContent />
			<LandingPageFooter />
		</>
	)
}
