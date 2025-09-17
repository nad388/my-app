import { useState } from 'react'
import HomePage from '../../pages/HomePage'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './App.css'

function App() {
	const [clicks, setClicks] = useState(0)
	const [isDarkMode, setIsDarkMode] = useState(false)
	// const condition = true
	// const response = '<div>alert("Hack!")</div>'

	return (
		// condition && (
		// 	<>
		// 		<div>
		// 			<h1>Hello! I am a Doppelganger!</h1>
		// 			<p>Who killed Laura Palmer?</p>
		// 			<MyName />
		// 			<div dangerouslySetInnerHTML={{ __html: response }}></div>
		// 			<Email />
		// 		</div>
		// 	</>
		<main className='app'>
			<Header clicks={clicks} />
			<HomePage />
			{/* <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />  */}
			<Footer />
		</main>
	)
	// )
}

export default App
