import mapa from '../assets/mapa-localizacao.png'
import './Location.css'

function Location() {
  return (
    <section id="localizacao" className="section location">
      <div className="container location__inner">
        <div className="location__map">
          <img src={mapa} alt="Mapa de localização da Clínica Ser Caminho" />
        </div>

        <div className="location__info">
          <span className="section-tag">estamos aqui</span>
          <h2>Venha nos visitar</h2>
          <p className="location__lead">
            Nossa clínica fica em um ambiente tranquilo e de fácil acesso, pensado para o seu
            conforto desde a chegada.
          </p>

          <ul className="location__list">
            <li>
              <span className="location__icon location__icon--pink" aria-hidden="true" />
              <div>
                <strong>Endereço</strong>
                <p>Av. Senador Levindo Coelho, 1923 — Vale do Jatobá, Belo Horizonte – MG</p>
              </div>
            </li>
            <li>
              <span className="location__icon location__icon--blue" aria-hidden="true" />
              <div>
                <strong>Horário de atendimento</strong>
                <p>Segunda a sexta, das 8h às 19h · Sábados sob agendamento</p>
              </div>
            </li>
            <li>
              <span className="location__icon location__icon--green" aria-hidden="true" />
              <div>
                <strong>Atendimento online</strong>
                <p>Também oferecemos sessões por videochamada para todo o Brasil</p>
              </div>
            </li>
          </ul>

          <a
            className="btn btn-primary"
            href="https://maps.google.com/?q=Av.+Senador+Levindo+Coelho,+1923,+Belo+Horizonte"
            target="_blank"
            rel="noreferrer"
          >
            Ver no mapa
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
