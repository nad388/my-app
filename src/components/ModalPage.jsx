import { useState } from 'react'
import Modal from './Modal'
import './ModalPage.css'

export default function ModalPage() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<div className='modal-page'>
			<button className='open-button' onClick={toggleModal}>
				Open modal window
			</button>
			{isModalOpen && (
				<Modal onClose={toggleModal}>
					<h2>Modal window</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
						quisquam amet quidem labore voluptatibus quae nobis est illum
						mollitia corporis quibusdam, ab commodi a, culpa voluptatem ex
						veniam odio ut?
					</p>
				</Modal>
			)}
		</div>
	)
}
