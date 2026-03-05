import { useState } from 'react'
import { projects } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Projects.module.css'
import '../fade.css'

const FILTERS = ['all', 'mobile', 'web', 'backend']

const themeGradients = {
  mobile:  'linear-gradient(135deg, #0d1f2d 0%, #091521 100%)',
  web:     'linear-gradient(135deg, #0d1a1a 0%, #091210 100%)',
  backend: 'linear-gradient(135deg, #1a1a0d 0%, #12100a 100%)',
}

function ProjectCard({ project }) {
  const ref = useScrollFade()
  return (
    <div className={`${styles.card} fade-up`} ref={ref}>
      <div className={styles.thumb} style={{ background: themeGradients[project.theme] }}>
        <div className={styles.thumbGrid} />
        <span className={styles.thumbIcon}>{project.icon}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.cat}>{project.category.join(' · ')}</div>
        <div className={styles.title}>{project.title}</div>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.stack}>
          {project.stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div className={styles.links}>
          {project.link
            ? <a href={project.link} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.linkPrimary}`}>↗ GitHub</a>
            : <span className={`${styles.link} ${styles.linkDisabled}`}>🔒 Private</span>
          }
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const hRef = useScrollFade()
  const fRef = useScrollFade()

  const filtered = projects.filter(p =>
    active === 'all' || p.category.includes(active)
  )

  return (
    <section id="projects" className={styles.section}>
      <SectionHeader num="02" title="Projects" fadeRef={hRef} />
      <div className={`${styles.filters} fade-up`} ref={fRef}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
