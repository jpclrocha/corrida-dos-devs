import { Link } from 'react-router-dom'
import './LandingPageCard.scss'

export default function LandingPageCard(props) {
	const texto = () => {
		let texto1 = props.texto
		let verde = props.verde
		let texto2 = props.texto2
		return (
			<h1 className='landing-page-card-title'>
				{texto1} <span className='card-text-verde'>{verde}</span>{' '}
				{texto2}
			</h1>
		)
	}

	const btnVazado = () => {
		if (props.botao === 'vazado') {
			return (
				<Link to={`${props.rota}`}>
					<button type='button' className='card-btn-vazado'>
						{props.btnTxt}
					</button>
				</Link>
			)
		} else {
			return (
				<Link to={`${props.rota}`}>
					<button type='button' className='card-btn'>
						{props.btnTxt}
					</button>
				</Link>
			)
		}
	}

	return (
		<div className='main-content-card-container'>
			{texto()}
			<p className='landing-page-text'>{props.textoPqn}</p>
			{btnVazado()}
		</div>
	)
}
