import { fireEvent, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'
import StudyMaterialModal from './StudyMaterialModal'

const mock = {
	id: 1,
	materialTitle: 'Rapp Snitch Knishes',
	materialVideoUrl: 'https://www.youtube.com/embed/gQtKJbptcns',
	materialIdealFor: 'Ideal para quem gosta de musica boa',
	materialDetailedInformation: 'testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
	materialShortInformation: 'musica para meus ouvidos',
	materialContentList: [
		{
			materialContent: ' teste',
		},
		{
			materialContent: 'musica',
		},
		{
			materialContent: ' teste',
		},
	],
}

describe('render', () => {
	const worker = setupServer(
		// Provide request handlers
		rest.get(
			'https://api.corrida-dos-devs.repl.co/material',
			(req, res, ctx) => {
				return res(
					ctx.json({
						id: 1,
						materialTitle: 'Rapp Snitch Knishes',
						materialVideoUrl:
							'https://www.youtube.com/embed/gQtKJbptcns',
						materialIdealFor: 'Ideal para quem gosta de musica boa',
						materialDetailedInformation:
							'testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						materialShortInformation: 'musica para meus ouvidos',
						materialContentList: [
							{
								materialContent: ' teste',
							},
							{
								materialContent: 'musica',
							},
							{
								materialContent: ' teste',
							},
						],
					})
				)
			}
		)
	)

	beforeAll(() => {
		// Start the Mock Service Worker
		worker.listen()
	})

	it('should fetch and render the materials', async () => {
		render(<StudyMaterialModal {...mock} />)

		await screen.findByText('Rapp Snitch Knishes')
	})
})
