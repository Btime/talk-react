import React from 'react'

const Grid = ({ children }) => {
	const style = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '62rem', margin: 'auto' }
	return <div style={style}>{children}</div>
}

export default Grid
