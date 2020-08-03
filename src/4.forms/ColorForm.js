import React from 'react'

import { Button, Paragraph } from '../1.baiscs/LearnMore'

const ColorForm = ({ onSubmit }) => {
	const [name, setName] = React.useState('')

	return (
		<div>
			<input placeholder="Nova cor..." value={name} onChange={e => setName(e.target.value)} />
			<Button name="Cadastrar" onClick={() => onSubmit(name)} />
			<Paragraph>Valor digitado: {name}</Paragraph>
		</div>
	)
}

export default ColorForm
