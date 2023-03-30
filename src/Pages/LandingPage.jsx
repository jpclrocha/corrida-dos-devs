import Navbar from '../Components/Navbar/Navbar'
import LandingPageMainContent from '../Components/Landing-page-main-content/LandingPageMainContent'
import LandingPageSubContent from '../Components/Landing-page-sub-content/LandingPageSubContent'
import LandingPageFooter from '../Components/Landing-page-footer/LandingPageFooter'

export default function LandingPage() {
	return (
		<>
			<Navbar />
			<LandingPageMainContent />
			<LandingPageSubContent />
			<LandingPageFooter />
		</>
	)
}
