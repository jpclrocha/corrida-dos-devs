import './Input.scss'

const TEXT_COLORS = {
	verde: 'texto-verde',
}

export default function Input({ label, color, ...otherProps }) {
	return (
		<div className='input-container'>
			<h1 className={`input-label ${TEXT_COLORS[color]}`}>{label}</h1>
			<input {...otherProps} className='input-box' />
		</div>
	)
}
