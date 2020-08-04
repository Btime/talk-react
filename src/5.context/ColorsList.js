import React from 'react'

import { useColorsContext } from './ColorsHandler'
import ColorForm from './ColorForm'
import ColorItem from './ColorItem'
import Grid from './Grid'

const ColorsList = () => {
	const { colors, addColor, setLike } = useColorsContext()

	return (
		<Grid>
			{colors.map((color, index) => (
				<ColorItem key={index} name={color.name} like={color.like} toggleLike={() => setLike(index, !color.like)} />
			))}
		</Grid>
	)
}

export default ColorsList
