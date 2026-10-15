import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand reveal">
          <div className="footer__logo">
            <span className="footer__logo-text">Ser Caminho</span>
          </div>
          <p>
            Atendimento multidisciplinar em Psicologia, Avaliação
            Neuropsicológica, Psicopedagogia, Neuropsicopedagogia,
            Fonoaudiologia e Nutrição — com escuta, ética e cuidado em cada
            etapa do caminho.
          </p>
        </div>

        <div className="footer__col reveal reveal-delay-1">
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#abordagem">Abordagem</a>
            </li>
            <li>
              <a href="#localizacao">Localização</a>
            </li>
          </ul>
        </div>

        <div className="footer__col reveal reveal-delay-2">
          <h4>Contato</h4>
          <ul>
            <li>Av. Senador Levindo Coelho, 1923</li>
            <li>Vale do Jatobá, Belo Horizonte – MG</li>
            <li><a href="tel:+5531975032248">(31) 97503-2248</a></li>
            <li>contato@sercaminho.com.br</li>
          </ul>
        </div>

        <div className="footer__col reveal reveal-delay-3">
          <h4>Redes sociais</h4>
          <ul className="footer__social">
            <li>
              <a
                href="https://www.instagram.com/clinicsercaminho/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                @clinicsercaminho
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} Clínica Ser Caminho. Todos os direitos reservados.
          </p>
          <p>CRP 04/58350</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
