export default function Greeting({ isLoggedIn }) {
	// if (isLoggedIn) {
	// 	return <h1>Welcome!</h1>
	// } else {
	// 	return <h1>Please, login</h1>
	// }

	return <div>{isLoggedIn ? <h1>Welcome!</h1> : <h1>Please, login</h1>}</div>
}
