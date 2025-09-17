import { useState } from 'react'
import './RegForm.css'
import {
	checkPasswordMatch,
	checkRequiredFields,
	validatePassword,
} from './validators'

const RegForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isPasswordValid, setIsPasswordValid] = useState(true)
	const [confirmPassword, setConfirmPassword] = useState('')
	const [passwordMatch, setPasswordMatch] = useState(true)
	const [selectedYear, setSelectedYear] = useState('')
	const [requiredFieldsError, setRequiredFieldsError] = useState(false)
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)

	const handleNameChange = e => setName(e.target.value)

	const handleEmailChange = e => setEmail(e.target.value)

	const handleYearChange = e => setSelectedYear(e.target.value)

	const handlePasswordChange = e => {
		const newPassword = e.target.value
		setPassword(newPassword)
		setIsPasswordValid(validatePassword(newPassword))
		setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword))
	}

	const handleConfirmPasswordChange = e => {
		const newConfirmPassword = e.target.value
		setConfirmPassword(newConfirmPassword)
		setPasswordMatch(checkPasswordMatch(password, newConfirmPassword))
	}

	const years = Array.from(
		{ length: 40 },
		(_, i) => new Date().getFullYear() - i
	)

	const handleSubmit = e => {
		e.preventDefault()

		const allFieldsFilled = checkRequiredFields([
			name,
			email,
			password,
			confirmPassword,
			selectedYear,
		])

		const isFormValid = allFieldsFilled && isPasswordValid && passwordMatch

		if (!isFormValid) {
			setRequiredFieldsError(true)
			setShowSuccessMessage(false)
			return
		}

		setRequiredFieldsError(false)
		setShowSuccessMessage(true)

		const formData = {
			name,
			email,
			password,
			confirmPassword,
			selectedYear,
		}

		alert(JSON.stringify(formData, null, 2))

		setTimeout(() => {
			setShowSuccessMessage(false)
		}, 3000)
	}

	const handleReset = () => {
		setName('')
		setEmail('')
		setPassword('')
		setIsPasswordValid('')
		setConfirmPassword('')
		setSelectedYear('')
	}

	return (
		<div className='section'>
			<h1>Registration form</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Name' onChange={handleNameChange} />
				<input type='email' placeholder='Email' onChange={handleEmailChange} />
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={handlePasswordChange}
				/>
				{!isPasswordValid && (
					<div className='error-message'>
						The password must contain Latin letters and numbers and be at least
						8 characters long.
					</div>
				)}

				<input
					type='password'
					placeholder='Confirm your password'
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
					style={{ color: passwordMatch ? 'green' : 'red' }}
				/>
				{!passwordMatch && (
					<div className='error-message'>The passwords don't match yet.</div>
				)}

				<select value={selectedYear} onChange={handleYearChange}>
					<option value=''>Graduation date:</option>
					{years.map(year => (
						<option key={year.toString()} value={year}>
							{year}
						</option>
					))}
				</select>

				<button type='submit'>Send</button>
				<button type='reset' onClick={handleReset}>
					Clear
				</button>
				{requiredFieldsError && (
					<div className='error-message'>
						Please check that the form fields are filled in.
					</div>
				)}
				{showSuccessMessage && (
					<div className='success-message'>Data sent successfully!</div>
				)}
			</form>
		</div>
	)
}

export default RegForm
