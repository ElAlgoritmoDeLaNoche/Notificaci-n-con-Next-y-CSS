import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.notification}>
        <p>Welcome back, Heber Conroy 🤙</p>
        <span className={styles.progress}></span>
      </div>
    </div>
  )
}
