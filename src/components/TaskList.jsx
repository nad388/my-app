import { Component } from 'react'

export default class TaskList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
			newTask: '',
		}
	}
	handleInputChange = event => {
		this.setState({ newTask: event.target.value })
	}
	addTask = () => {
		const { tasks, newTask } = this.state
		if (newTask.trim()) {
			this.setState({ tasks: [...tasks, newTask], newTask: '' })
		}
	}
	render() {
		return (
			<div>
				<h1>Tasks list</h1>
				<input
					type='text'
					value={this.state.newTask}
					onChange={this.handleInputChange}
				/>
				<button onClick={this.addTask}>Add</button>
				<ul>
					{this.state.tasks.map((task, index) => (
						<li key={index}>{task}</li>
					))}
				</ul>
			</div>
		)
	}
}
