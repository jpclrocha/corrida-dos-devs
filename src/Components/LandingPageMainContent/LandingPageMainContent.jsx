import LandingPageCard from '../LandingPageCard/LandingPageCard'
import './LandingPageMainContent.scss'
export default function LandingPageMainContent() {
	return (
		<div className='landing-page-main-content-container'>
			<LandingPageCard
				texto='Conheça nossos'
				verde='desafios semanais'
				texto2='para 
  conquistar pontos e subir no Ranking'
				textoPqn='Cada desafio contém uma pontuação para te ajudar a alcançar uma nova posição'
				botao='verde'
				btnTxt='Desafios'
				rota='desafio'
			/>

			<LandingPageCard
				texto='Uma'
				verde='ampla seleção de materiais'
				texto2='para você evoluir no mundo da programação'
				textoPqn='Escolha entre nossos materiais online com novas adições publicadas mensalmente'
				botao='vazado'
				btnTxt='Materiais'
				rota='materials'
			/>
		</div>
	)
}
