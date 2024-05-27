
import styles from './TransitionButtonNoText.module.css'
const TransitionButtonNoText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
        <span className={styles.line4}></span>
      </div>
      <div className={styles.button2}>
        <span className={styles.button2line1}></span>
        <span className={styles.button2line2}></span>
        <span className={styles.button2line3}></span>
        <span className={styles.button2line4}></span>
      </div>
      <div className={styles.button3}>
        <span className={styles.button2line1}></span>
        <span className={styles.button2line2}></span>
        <span className={styles.button2line3}></span>
        <span className={styles.button2line4}></span>
      </div>
      <div className={styles.button4}>
        <span className={styles.button2line1}></span>
        <span className={styles.button2line2}></span>
        <span className={styles.button2line3}></span>
        <span className={styles.button2line4}></span>
      </div>
      <div className={styles.button5}>
        <span className={styles.button2line1}></span>
        <span className={styles.button2line2}></span>
        <span className={styles.button2line3}></span>
        <span className={styles.button2line4}></span>
      </div>

      <div className={styles.textcontainer}>
        <div className={styles.text1}>
          <p>Made</p>
        </div>
        <div className={styles.text2}>
          <p>Accessible</p>
        </div>
      </div>

    </div>
  )
}

export default TransitionButtonNoText