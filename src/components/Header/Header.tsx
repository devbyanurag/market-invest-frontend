import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.linkContainer}>
          <div className={styles.linkAnimation1wthcontainer}>
            <div className={styles.linkAnimation1wthinnercontainer}>
              <div className={styles.linkAnimation1wthinnercontainerdot}>
              </div>
            </div>
          </div>
          <div className={styles.linkText}>
            <p>Opportunities </p>
          </div>

        </div>
        <div className={styles.linkContainer}>
          <div className={styles.linkAnimation2container}>
            <div className={styles.linkAnimation2innercontainer1}>

            </div>
            <div className={styles.linkAnimation2innercontainer2}>

            </div>
          </div>
          <div className={styles.linkText}>
            <p> How it Works </p>
          </div>

        </div>
        <div className={styles.linkContainer}>
          <div className={styles.linkAnimationContainer}>
            <div className={styles.linkAnimation3container}>
              <div className={styles.linkAnimation3innercontainer1}>

              </div>
              <div className={styles.linkAnimation3innercontainer2}>

              </div>
            </div>

          </div>
          <div className={styles.linkText}>
            <p>About Us</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header