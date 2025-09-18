import { useState } from 'react'

function MyComponent({ count = 0, increment }) {
	return (
		<div>
			<p>Counter: {count}</p>
			<button onClick={increment}>Increase</button>
		</div>
	)
}

function withCounter(MyComponent, initialCount = 0) {
	//HOC
	function WithCounterComponent(props) {
		const [count, setCount] = useState(props.initialCount || initialCount)

		const increment = () => {
			setCount(count + 1)
		}

		return <MyComponent count={count} increment={increment} {...props} />
	}
	return WithCounterComponent
}

const EnhancedComponent = withCounter(MyComponent, 10)

export default EnhancedComponent
