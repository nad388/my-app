import './Header.css'

export default function Header() {
	const style = {
		color: 'blue',
		fontSize: '2rem',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	}

	return (
		<header className='container' style={style}>
			<h1>Title</h1>
		</header>
	)
}
