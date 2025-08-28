import './HomePage.css'

export default function HomePage({ clicks, setClicks }) {
	const handleClick = () => {
		setClicks(clicks + 1)
	}

	return (
		<>
			<button onClick={handleClick}>Push me</button>
			<p>Count: {clicks}</p>
		</>
	)
}
