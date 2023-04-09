import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import Faixa from '../../Utils/Faixa/Faixa'
import Descricao from './Descricao/Descricao'
import Preview from './Preview/Preview'
import './StudyMaterialExpanded.scss'

export default function StudyMaterialExpanded() {
	const [curso, setCurso] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		const getMaterial = async (id) => {
			const response = await api.get(`/material/${id}`)
			setCurso(response.data[0])
		}
		getMaterial(id)
	}, [id])

	return (
		<div className='expanded-container'>
			<Faixa {...curso} colorType='verde' />
			<Preview {...curso} />
			<Descricao {...curso} />
		</div>
	)
}
