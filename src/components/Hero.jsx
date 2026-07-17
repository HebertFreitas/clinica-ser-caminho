import logo from '../assets/logo-ser-caminho-transparente.png'
import './Hero.css'

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__blob hero__blob--pink" aria-hidden="true" />
      <div className="hero__blob hero__blob--blue" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-tag">cuidado multidisciplinar</span>
          <h1 className="hero__title">
            Cuidar de cada etapa do seu desenvolvimento é o primeiro passo para{' '}
            <span>ser caminho</span> até você mesmo.
          </h1>
          <p className="hero__subtitle">
            Na Clínica Ser Caminho, reunimos Psicologia, Avaliação Neuropsicológica,
            Psicopedagogia, Neuropsicopedagogia, Fonoaudiologia e Nutrição em um único espaço
            de cuidado. Um atendimento integrado, humano e ético para você e sua família, em
            cada etapa do desenvolvimento.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="btn btn-primary">
              Agende seu atendimento
            </a>
            <a href="#sobre" className="btn btn-secondary">
              Conheça a clínica
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>Equipe</strong>
              <span>multidisciplinar</span>
            </div>
            <div className="hero__stat">
              <strong>Atendimento</strong>
              <span>humanizado</span>
            </div>
            <div className="hero__stat">
              <strong>Sigilo, ética</strong>
              <span>e cuidado</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img src={logo} alt="Ser Caminho" className="hero__logo-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
