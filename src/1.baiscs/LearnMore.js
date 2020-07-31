import React from 'react'

export const Title = ({ name }) => <h1>{name}</h1>
export const Paragraph = ({ name, children }) => <p>{name || children}</p>

export const Button = ({ color, name, children, ...props }) => {
	const style = {
		color: 'white',
		background: color || 'green'
	}

	return (
		<button style={style} {...props}>
			{name || children}
		</button>
	)
}

const LearnMore = ({ title, onClick }) => {
	const TextComponent = title.length < 10 ? Title : Paragraph
	const buttonDOM = onClick && <Button color="tomato" name="Ver Mais" onClick={onClick} />

	return (
		<div>
			<TextComponent name={title} />
			<Paragraph>Qualquer coisa</Paragraph>
			{buttonDOM}
		</div>
	)
}

export default LearnMore
