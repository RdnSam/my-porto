import { education, profile } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './EducationContact.module.css'
import '../fade.css'

export default function EducationContact() {
  const h1 = useScrollFade()
  const e1 = useScrollFade()
  const h2 = useScrollFade()
  const c1 = useScrollFade()

  return (
    <>
      <section id="education" className={styles.section}>
        <SectionHeader num="04" title="Education" fadeRef={h1} />
        <div className={`${styles.eduCard} fade-up`} ref={e1}>
          <div className={styles.badge}>🎓</div>
          <div>
            <div className={styles.degree}>{education.degree}</div>
            <div className={styles.school}>{education.school}</div>
            <div className={styles.year}>{education.year}</div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <SectionHeader num="05" title="Contact" fadeRef={h2} />
        <div className={`${styles.contactGrid} fade-up`} ref={c1}>
          <a href={`tel:${profile.phone.replace(/-/g, '')}`} className={styles.contactCard}>
            <div className={styles.icon}>📞</div>
            <div>
              <div className={styles.label}>Phone</div>
              <div className={styles.value}>{profile.phone}</div>
            </div>
          </a>
          <a href={`mailto:${profile.email}`} className={styles.contactCard}>
            <div className={styles.icon}>✉️</div>
            <div>
              <div className={styles.label}>Email</div>
              <div className={styles.value}>{profile.email}</div>
            </div>
          </a>
          <div className={styles.contactCard} style={{ cursor: 'default' }}>
            <div className={styles.icon}>📍</div>
            <div>
              <div className={styles.label}>Location</div>
              <div className={styles.value}>{profile.location}</div>
            </div>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.contactCard}>
            <div className={styles.icon}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--cyan)' }}>
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div>
              <div className={styles.label}>GitHub</div>
              <div className={styles.value}>RdnSam</div>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
