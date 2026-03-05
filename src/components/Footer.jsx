import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built by <span>Ridwan Syambudi</span> with React + Vite · © {new Date().getFullYear()}</p>
    </footer>
  )
}
