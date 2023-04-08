import './Faixa.scss'

const FAIXA_TYPE_CLASSES = {
	verde: 'faixa-verde',
	cinza: 'faixa-cinza',
}

export default function Faixa({ materialTitle, colorType }) {
	return (
		<div className={`faixa-container ${FAIXA_TYPE_CLASSES[colorType]}`}>
			<h1 className='titulo-faixa'>{materialTitle}</h1>
		</div>
	)
}
