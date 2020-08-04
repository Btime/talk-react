import React from 'react'

const ColorsContext = React.createContext()
export const useColorsContext = () => React.useContext(ColorsContext)

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

const ColorsHandler = ({ children }) => {
	const [colors, setColors] = React.useState(initColors)

	const setLike = (indexToChange, like) => {
		setColors(colors.map((color, index) => (index === indexToChange ? { ...color, like: like } : color)))
	}

	const addColor = React.useCallback(
		newColor => {
			setColors([{ name: newColor }, ...colors])
		},
		[colors]
	)

	const value = {
		colors,
		addColor,
		setLike
	}

	return <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
}

export default ColorsHandler
