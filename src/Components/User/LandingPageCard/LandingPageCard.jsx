import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Utils/Button/Button'
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

	return (
		<div className='main-content-card-container'>
			{texto()}
			<p className='landing-page-text'>{props.textoPqn}</p>
			<Link to={`${props.rota}`}>
				<Button buttonType={props.botao}>{props.btnTxt}</Button>
			</Link>
		</div>
	)
}
