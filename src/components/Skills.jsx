import { skills } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Skills.module.css'
import '../fade.css'

export default function Skills() {
  const hRef = useScrollFade()
  const gRef = useScrollFade()
  return (
    <section id="skills" className={styles.section}>
      <SectionHeader num="03" title="Skills" fadeRef={hRef} />
      <div className={`${styles.grid} fade-up`} ref={gRef}>
        {skills.map(s => (
          <div key={s.label} className={styles.card}>
            <div className={styles.category}>{s.label}</div>
            <div className={styles.tags}>
              {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
