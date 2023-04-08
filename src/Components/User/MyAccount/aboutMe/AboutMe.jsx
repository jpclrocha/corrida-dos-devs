import './AboutMe.scss'

export default function AboutMe({ userBio }) {
	return (
		<div className='aboutme-container'>
			<h1 className='aboutme-title'>Sobre mim</h1>
			<p className='aboutme-text'>{userBio}</p>
		</div>
	)
}
