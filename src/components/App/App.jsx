import { Email } from '../Email'
import MyName from '../MyName/MyName'
import './App.css'

function App() {
	const condition = true
	const response = '<div>alert("Hack!")</div>'

	return (
		condition && (
			<>
				<div>
					<h1>Hello! I am a Doppelganger!</h1>
					<p>Who killed Laura Palmer?</p>
					<MyName />
					<div dangerouslySetInnerHTML={{ __html: response }}></div>
					<Email />
				</div>
			</>
		)
	)
}

export default App
