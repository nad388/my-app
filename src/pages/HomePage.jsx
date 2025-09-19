import ModalPage from '../components/ModalPage'
import './HomePage.css'

export default function HomePage() {
	const messages = ['message1', 'message2', 'message3']
	return (
		<div className='home-page'>
			{/* <Greeting isLoggedIn={true} />
			<Greeting isLoggedIn={false} />
			<Notification messages={messages} />
			<Notification messages={[]} /> */}
			{/* <RegForm /> */}
			{/* <EnhancedComponent /> */}
			{/* <Container>This is a child component!</Container> */}
			<ModalPage />
		</div>
	)
}
