import React from 'react'

import ColorForm from './ColorForm'
import ColorItem from './ColorItem'
import Grid from './Grid'

const initColors = [
	{ name: 'green' },
	{ name: 'orange' },
	{ name: 'purple' },
	{ name: 'tomato' },
	{ name: 'darkBlue' },
	{ name: 'blue' },
	{ name: 'darkGrey' },
	{ name: 'yellow' },
	{ name: 'red' },
	{ name: 'olive' },
	{ name: 'chocolate' },
	{ name: 'blueViolet' },
	{ name: 'cadetBlue' }
]

const ColorsList = () => {
	const [colors, setColors] = React.useState(initColors)

	const setLike = (indexToChange, like) => {
		setColors(colors.map((color, index) => (index === indexToChange ? { ...color, like: like } : color)))
	}

	const addColor = name => {
		setColors([{ name: name }, ...colors])
	}

	return (
		<div>
			<ColorForm onSubmit={addColor} />
			<Grid>
				{colors.map((color, index) => (
					<ColorItem key={index} name={color.name} like={color.like} toggleLike={() => setLike(index, !color.like)} />
				))}
			</Grid>
		</div>
	)
}

export default ColorsList
