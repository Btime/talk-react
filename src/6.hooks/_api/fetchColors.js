const colorsFromApi = [
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

export const fetchColors = () => {
	console.log('FETCHING COLORS')
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(colorsFromApi)
		}, 1000)
	})
}
