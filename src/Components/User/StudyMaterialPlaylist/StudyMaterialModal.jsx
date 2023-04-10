import { Link } from 'react-router-dom'
import image from '../../../assets/playBtn.svg'
import Button from '../../Utils/Button/Button'
import './StudyMaterialModal.scss'

export default function StudyMaterialModal({
	MaterialId,
	MaterialTitle,
	MaterialDetailedInformation,
	MaterialShortInformation,
	MaterialIdealFor,
	MaterialVideoUrl,
	MateiralContentList,
}) {
	const generateList = MateiralContentList.map((item) => {
		return (
			<li className='list-item' key={item.id}>
				{item.title}
			</li>
		)
	})

	return (
		<div className='material-modal-container'>
			<div className='img-container'>
				<img src={image} alt='Play Button' className='img' />
			</div>

			<div className='info-container'>
				<h1 className='title'>{MaterialTitle}</h1>
				<div className='description'>
					<p>{MaterialShortInformation}</p>
				</div>
			</div>

			<div className='list-container'>
				<h1 className='list-title'>{MaterialIdealFor}</h1>
				<ul className='list-items-container'>{generateList}</ul>
				<Link to={`/materials/${MaterialId}`}>
					<Button buttonType={'verde'}>Iniciar jornada</Button>
				</Link>
			</div>
		</div>
	)
}