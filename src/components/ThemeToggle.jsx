export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode)
	}
	return (
		<div
			style={{
				background: isDarkMode ? 'black' : 'white',
				color: isDarkMode ? 'white' : 'black',
				height: 200,
			}}
		>
			<button onClick={toggleTheme}>Change color theme</button>
		</div>
	)
}
