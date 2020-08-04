import React from 'react'

import ColorForm from './ColorForm'
import ColorsHandler from './ColorsHandler'
import ColorsList from './ColorsList'

const ColorsView = () => {
	return (
		<div>
			<ColorsHandler>
				<ColorForm />
				<ColorsList />
			</ColorsHandler>
		</div>
	)
}

export default ColorsView
