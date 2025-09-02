export const Notification = ({ messages }) => {
	return (
		<div>{messages.length > 0 && <h1>Messages: {messages.length}</h1>}</div>
	)
}
