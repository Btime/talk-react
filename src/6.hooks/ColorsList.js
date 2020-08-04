import React from 'react'

import { useColorsContext, useFilteredColors } from './ColorsHandler'
import ColorItem from './ColorItem'
import Grid from './Grid'

const ColorsList = () => {
	const { colors, loading, addColor, setLike } = useColorsContext()
	const filteredColors = useFilteredColors()

	return (
		<Grid>
			{filteredColors.map((color, index) => (
				<ColorItem key={index} name={color.name} like={color.like} toggleLike={() => setLike(index, !color.like)} />
			))}
		</Grid>
	)
}

export default ColorsList
