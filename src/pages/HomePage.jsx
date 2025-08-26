import Button from '../components/Button'
import TaskList from '../components/TaskList'
import TextComponent from '../components/TextComponent'
import UserList from '../components/UserList'
import './HomePage.css'

export default function HomePage({ click }) {
	const showMessage = () => {
		alert('This is message!')
	}
	return (
		<div className='home-page'>
			<h2>Home page</h2>
			<p>Welcome!</p>
			<Button label='push me' onClick={click} />
			<Button
				label='some message'
				onClick={() => {
					showMessage()
				}}
			/>
			<UserList />
			{/* <img src={programmer} alt='programmer' />
			<img src='laptop.jpg' alt='laptop' /> */}
			<TextComponent />
			<TaskList />
		</div>
	)
}
