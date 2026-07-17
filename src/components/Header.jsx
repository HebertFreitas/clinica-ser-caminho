import { useEffect, useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__brand" onClick={handleLinkClick}>
          <span className="header__logo-text">Ser Caminho</span>
        </a>

        <nav className="header__nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="btn btn-primary header__cta">
          Agende seu atendimento
        </a>

        <button
          type="button"
          className={`header__toggle ${isOpen ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header__mobile ${isOpen ? 'is-open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contato" className="btn btn-primary" onClick={handleLinkClick}>
          Agende seu atendimento
        </a>
      </div>
    </header>
  )
}

export default Header
