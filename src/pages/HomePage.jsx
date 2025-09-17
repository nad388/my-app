import RegForm from '../components/RegForm/RegForm'
import './HomePage.css'

export default function HomePage() {
	const messages = ['message1', 'message2', 'message3']
	return (
		<>
			{/* <Greeting isLoggedIn={true} />
			<Greeting isLoggedIn={false} />
			<Notification messages={messages} />
			<Notification messages={[]} /> */}
			<RegForm />
		</>
	)
}
