import stylesAdded from './AddedStyles.module.css'
import styles from './Button.module.css'

export default function Button({ variant = 'primary' }) {
	const buttonClass = `${styles.button} ${styles[variant]}`
	return (
		<>
			<button className={buttonClass}>Push me</button>
			<a href='#' className={stylesAdded.link}>
				Link me
			</a>
		</>
	)
}
