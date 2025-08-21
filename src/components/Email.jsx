export function Email() {
	const email = 'test@gmail.com'
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const check = emailRegex.test(email)

	return check ? email : null
}
