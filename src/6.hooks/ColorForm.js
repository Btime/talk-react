import React from 'react'

import { Button } from '../1.baiscs/LearnMore'
import { useColorsContext } from './ColorsHandler'

const ColorForm = () => {
	const { addColor } = useColorsContext()
	const [colorName, setColorName] = React.useState('')
	const onChange = e => setColorName(e.target.value)

	return (
		<div>
			<input placeholder="Nome da cor..." value={colorName} onChange={onChange} />
			<Button onClick={() => addColor(colorName)}>Salvar</Button>
			<p>Valor digitado: {colorName}</p>
		</div>
	)
}

export default ColorForm
