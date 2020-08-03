import React from 'react'

import ColorsHandler, { useColors } from './ColorsHandler'
import ColorsList from './ColorsList'

const ColorsView = () => {
	return (
		<ColorsHandler>
			<ColorsList />
		</ColorsHandler>
	)
}

export default ColorsView
