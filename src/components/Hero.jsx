import logo from '../assets/logo-ser-caminho-transparente.png'
import './Hero.css'

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__path" aria-hidden="true">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M300 560 C300 420 180 380 120 280 C60 180 140 80 300 60 C460 80 540 180 480 280 C420 380 300 420 300 560"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.35"
          />
          <path
            d="M300 520 C240 460 160 420 140 320 C120 220 200 140 300 120 C400 140 480 220 460 320 C440 420 360 460 300 520"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="section-tag">cuidado multidisciplinar</span>
          <h1 className="hero__title">
            Cuidar de cada etapa do seu desenvolvimento é o primeiro passo para{' '}
            <em>ser caminho</em> até você mesmo.
          </h1>
          <p className="hero__subtitle">
            Na Clínica Ser Caminho, reunimos Psicologia, Avaliação Neuropsicológica,
            Psicopedagogia, Neuropsicopedagogia, Fonoaudiologia e Nutrição em um único espaço
            de cuidado. Um atendimento integrado, humano e ético para você e sua família.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="btn btn-primary">
              Agende seu atendimento
            </a>
            <a href="#sobre" className="btn btn-secondary">
              Conheça a clínica
            </a>
          </div>

          <ul className="hero__pillars" aria-label="Diferenciais da clínica">
            <li className="hero__pillar reveal reveal-delay-1">
              <span className="hero__pillar-label">Equipe</span>
              <span className="hero__pillar-value">multidisciplinar</span>
            </li>
            <li className="hero__pillar reveal reveal-delay-2">
              <span className="hero__pillar-label">Atendimento</span>
              <span className="hero__pillar-value">humanizado</span>
            </li>
            <li className="hero__pillar reveal reveal-delay-3">
              <span className="hero__pillar-label">Compromisso</span>
              <span className="hero__pillar-value">ética e sigilo</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual reveal reveal-delay-2">
          <div className="hero__frame">
            <div className="hero__frame-ring" aria-hidden="true" />
            <img src={logo} alt="Logo da Clínica Ser Caminho" className="hero__logo-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
