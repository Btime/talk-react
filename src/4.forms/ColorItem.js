import React from 'react'

import { Paragraph } from '../1.baiscs/LearnMore'

const ColorItem = ({ name, like, toggleLike }) => (
	<div style={{ padding: '1rem' }}>
		<div style={{ marginBottom: '.5rem', width: '10rem', height: '10rem', background: name, borderRadius: '.5rem' }} />
		<Paragraph name={name} />
		<a onClick={toggleLike}>{like ? 'Remover' : 'Like'}</a>
	</div>
)

export default ColorItem
