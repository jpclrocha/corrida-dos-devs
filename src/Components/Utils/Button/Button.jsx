import './Button.scss'

const BUTTON_TYPE_CLASSES = {
	verde: 'bg-verde',
	vazado: 'vazado',
	hamburger: 'hamburger',
}

const Button = ({ children, buttonType, className, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${className}`}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
