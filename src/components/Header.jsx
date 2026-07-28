import { useEffect, useState } from 'react'
import logo from '../assets/logo-ser-caminho-transparente.png'
import { useActiveSection } from '../hooks/useActiveSection'
import './Header.css'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Abordagem', href: '#abordagem', id: 'abordagem' },
  { label: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
  { label: 'Localização', href: '#localizacao', id: 'localizacao' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  const linkClassName = (id) =>
    activeSection === id ? 'is-active' : undefined

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__brand" onClick={handleLinkClick}>
          <img src={logo} alt="" className="header__logo-image" aria-hidden="true" />
          <span className="header__logo-text">Ser Caminho</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClassName(link.id)}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="btn btn-primary header__cta">
          Agendar atendimento
        </a>

        <button
          type="button"
          className={`header__toggle ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header__mobile ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <nav aria-label="Menu mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClassName(link.id)}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contato" className="btn btn-primary" onClick={handleLinkClick}>
          Agendar atendimento
        </a>
      </div>
    </header>
  )
}

export default Header
