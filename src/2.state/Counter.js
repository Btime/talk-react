import React from 'react'

import { Button, Paragraph, Title } from '../1.baiscs/LearnMore'

const Counter = () => {
	const [num, setNum] = React.useState(1)

	const add = i => setNum(num + i)

	return (
		<div>
			<Title>Contador</Title>
			<Paragraph>Valor: {num}</Paragraph>
			<Button name="-1" onClick={() => add(-1)} />
			<Button name="+1" onClick={() => add(1)} />
			<Button name="+5" onClick={() => add(5)} />
		</div>
	)
}

export default Counter
