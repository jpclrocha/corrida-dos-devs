import './Descricao.scss'
export default function Descricao({ materialDetailedInformation }) {
	return (
		<div className='description-container'>
			<div className='linha'></div>
			<h1 className='title'>O que você poderá aprender</h1>
			<p className='text'>{materialDetailedInformation}</p>
			<div className='linha'></div>
		</div>
	)
}
