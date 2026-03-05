import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['experience', 'projects', 'skills', 'education', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(id => document.getElementById(id)).filter(Boolean)
      let current = ''
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>RS<span>.</span></div>
      <ul className={styles.links}>
        {links.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? styles.activeLink : ''}>
              {id}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.status}>
        <span className={styles.dot} />
        Available for Work
      </div>
    </nav>
  )
}
