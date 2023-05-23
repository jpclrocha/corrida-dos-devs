import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import RankingModal from '../Components/User/Ranking/RankingModal'

const user = {
	id: 1,
	userName: 'Joao',
	userRankPoints: 1400,
}

it('should not be dark mode', () => {
	const { container } = render(<RankingModal {...user} />)

	//clicar botao do modo escuro
	//fireEvent.click(screen.getByText('dark mode'))
	expect(container.children[0]).toHaveStyle(`background-color: #121212`)
})
