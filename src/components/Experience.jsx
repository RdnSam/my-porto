import { useRef } from 'react'
import { experiences } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Experience.module.css'
import '../fade.css'

function ExpCard({ exp }) {
  const ref = useScrollFade()
  return (
    <div className={`${styles.card} fade-up`} ref={ref}>
      <div className={styles.header}>
        <div>
          <div className={styles.role}>
            {exp.role}
            {exp.type && <span className={styles.type}> ({exp.type})</span>}
          </div>
          <div className={styles.company}>{exp.company}</div>
        </div>
        <span className={styles.period}>{exp.period}</span>
      </div>
      <ul className={styles.bullets}>
        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  const hRef = useScrollFade()
  return (
    <section id="experience" className={styles.section}>
      <SectionHeader num="01" title="Experience" fadeRef={hRef} />
      <div className={styles.list}>
        {experiences.map((exp, i) => <ExpCard key={i} exp={exp} />)}
      </div>
    </section>
  )
}
