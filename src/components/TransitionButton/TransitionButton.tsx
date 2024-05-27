
import styles from './TransitionButton.module.css'
const TransitionButton = () => {
  return (
    <div className={styles.button}>
      <span className={styles.line1}></span>
      <span className={styles.line2}></span>
      <span className={styles.line3}></span>
      <span className={styles.line4}></span>
      Create an Account
    </div>
  )
}

export default TransitionButton