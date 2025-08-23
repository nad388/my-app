export default function Button() {
	const handleClick = () => {
		alert('Oh, yeea!')
	}

	return <button onClick={handleClick}>Push me</button>
}
