import React from 'react'

import { Paragraph } from '../1.baiscs/LearnMore'

const Grid = ({ children }) => {
	const style = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '62rem', margin: 'auto' }
	return <div style={style}>{children}</div>
}

const ColorItem = ({ name, like, toggleLike }) => (
	<div style={{ padding: '1rem' }}>
		<div style={{ marginBottom: '.5rem', width: '10rem', height: '10rem', background: name, borderRadius: '.5rem' }} />
		<Paragraph name={name} />
		<a onClick={toggleLike}>{like ? 'Remover' : 'Like'}</a>
	</div>
)

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

	return (
		<Grid>
			{colors.map((color, index) => (
				<ColorItem
					key={color.name}
					name={color.name}
					like={color.like}
					toggleLike={() => setLike(index, !color.like)}
				/>
			))}
		</Grid>
	)
}

export default ColorsList
