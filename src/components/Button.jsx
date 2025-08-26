export default function Button({ label = 'just button', onClick, btnStyles }) {
	return (
		<button onClick={onClick} style={btnStyles}>
			{label}
		</button>
	)
}
