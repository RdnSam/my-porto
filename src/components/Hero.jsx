import { profile } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.content}>
        <div className={styles.tag}>Fullstack Developer</div>
        <h1 className={styles.h1}>
          {profile.name.split(' ')[0]}<br />
          <span className={styles.outline}>{profile.name.split(' ')[1]}</span>
        </h1>
        <p className={styles.role}>{profile.tagline}</p>
        <p className={styles.bio}>{profile.bio}</p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>→ Get in Touch</a>
          <a href="#projects" className={styles.btnGhost}>View Projects</a>
        </div>
        <div className={styles.stats}>
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum} dangerouslySetInnerHTML={{ __html: s.num.replace(/(\+|k\+)/, '<span>$1</span>') }} />
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
