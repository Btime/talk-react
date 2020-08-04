import React from 'react'

import ColorForm from './ColorForm'
import ColorsHandler from './ColorsHandler'
import ColorsList from './ColorsList'

const ColorsView = () => {
	return (
		<ColorsHandler>
			<ColorForm />
			<ColorsList />
		</ColorsHandler>
	)
}

export default ColorsView
