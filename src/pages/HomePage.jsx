import { useState } from 'react'
import './HomePage.css'

export default function HomePage() {
	const [value, setValue] = useState('')

	const handleChange = event => {
		setValue(event.target.value)
	}
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			alert(`${value}`)
		}
	}

	// const handleSubmit = event => {
	// 	event.preventDefault()
	// 	alert('Form sended!')
	// }

	// const handleMouseOver = () => {
	// 	console.log('mouse is over button')
	// }
	// const handleMouseOut = () => {
	// 	console.log('mouse is out')
	// }

	// const handleFocus = () => {
	// 	console.log('field focus')
	// }

	// const handleBlur = () => {
	// 	console.log('field blur')
	// }

	// const handleScroll = event => {
	// 	console.log('Scrolling', event.target.scrollTop)
	// }

	// const handleLoad = () => {
	// 	console.log('image is loaded!')
	// }
	// const handleError = () => {
	// 	console.log('error loading image')
	// }

	return (
		<>
			<div>Home page</div>
			{/* <input type='text' onChange={handleChange} />
			<p>{value}</p> */}

			{/* <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				Point it at me!
			</button>

			<input type='text' onFocus={handleFocus} onBlur={handleBlur} /> */}

			{/* <div
				onScroll={handleScroll}
				style={{ height: '300px', overflow: 'auto' }}
			>
				<div style={{ height: '900px' }}>Scrolling element</div>
			</div> */}
			{/* 
			<img
				src='https://i.pinimg.com/736x/b0/2c/4b/b02c4ba691924bdc88fce9a17c067e13.jpg'
				alt='image'
				onLoad={handleLoad}
				onError={handleError}
			/> */}

			<input
				type='text'
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				placeholder='Enter the text and press Enter'
			/>
		</>
	)
}
