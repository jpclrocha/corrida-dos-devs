import './Input.scss'

export default function Input({ label, ...otherProps }) {
	return (
		<div className='input-container'>
			<h1 className='input-label'>{label}</h1>
			<input {...otherProps} className='input-box' />
		</div>
	)
}
