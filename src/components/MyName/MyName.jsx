import './MyName.css'

function MyName() {
	const cats = ['Lion', 'Tiger', 'Puma']
	return (
		<ul style={{ color: 'blue', fontSize: 32 }}>
			{cats.map(cat => (
				<li key={cat}>{cat}</li>
			))}
		</ul>
	)
}

export default MyName
