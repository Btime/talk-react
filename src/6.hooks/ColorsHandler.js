import React from 'react'

import { fetchColors } from './_api/fetchColors'

const ColorsContext = React.createContext()
export const useColorsContext = () => React.useContext(ColorsContext)

export const useFilteredColors = () => {
	const { colors } = useColorsContext()
	return React.useMemo(() => colors.filter(item => !!item.name), [colors])
}

const useLoader = (request, onComplete) => {
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		setLoading(true)

		request().then(result => {
			setLoading(false)
			onComplete(result)
		})
	}, [])

	return loading
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLOR':
			return [{ name: action.payload }, ...state]

		case 'SET_COLORS':
			return action.payload

		case 'SET_LIKE':
			const { indexToChange, like } = action.payload
			return state.map((color, index) => (index === indexToChange ? { ...color, like: like } : color))

		default:
			return state
	}
}

const ColorsHandler = ({ children }) => {
	const [colors, dispatch] = React.useReducer(reducer, [])

	const setColors = colors => {
		dispatch({ type: 'SET_COLORS', payload: colors })
	}

	const setLike = (indexToChange, like) => {
		dispatch({ type: 'SET_LIKE', payload: { indexToChange, like } })
	}

	const addColor = newColor => {
		dispatch({ type: 'ADD_COLOR', payload: newColor })
	}

	const loading = useLoader(fetchColors, setColors)

	const value = {
		colors,
		addColor,
		setLike
	}

	if (!!loading) return <p>Carregando...</p>

	return <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
}

export default ColorsHandler
