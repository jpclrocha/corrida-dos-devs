import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Utils/Button/Button'
import './StudyMaterialModal.scss'

export default function StudyMaterialModal({
	id,
	materialTitle,
	materialDetailedInformation,
	materialShortInformation,
	materialIdealFor,
	materialVideoUrl,
	materialContentList,
}) {
	const generateList = materialContentList.map((item) => {
		return (
			<li className='list-item' key={item.id}>
				{item.materialContent}
			</li>
		)
	})

	return (
		<div className='material-modal-container'>
			<div className='img-container'>
				<img
					src={'assets/playBtn.svg'}
					alt='Play Button'
					className='img'
				/>
			</div>

			<div className='info-container'>
				<h1 className='title'>{materialTitle}</h1>
				<div className='description'>
					<p>{materialShortInformation}</p>
				</div>
			</div>

			<div className='list-container'>
				<h1 className='list-title'>{materialIdealFor}</h1>
				<ul className='list-items-container'>{generateList}</ul>
				<Link to={`/materials/${id}`}>
					<Button buttonType={'verde'}>Iniciar jornada</Button>
				</Link>
			</div>
		</div>
	)
}
