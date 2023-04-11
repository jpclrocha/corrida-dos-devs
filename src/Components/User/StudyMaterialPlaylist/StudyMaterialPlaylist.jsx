import { useEffect, useState } from 'react'
import StudyMaterialModal from './StudyMaterialModal'

import { api } from '../../../services/api.js'

import './StudyMaterialPlaylist.scss'

export default function StudyMaterialPlaylist() {
	const [course, setCourse] = useState([])
	useEffect(() => {
		const getMaterial = async () => {
			try {
				const res = await api.get('/material')
				setCourse(res.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getMaterial()
	}, [])

	if (!course.length) return <h3>Loading...</h3>

	return (
		<div className='study-material-playlist-container'>
			<h1 className='study-material-playlist-title'>
				Materiais de estudo:
			</h1>

			{course.map((item) => {
				return <StudyMaterialModal {...item} key={item.id} />
			})}
		</div>
	)
}
