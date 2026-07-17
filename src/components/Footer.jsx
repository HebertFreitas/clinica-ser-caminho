import TreeIcon from "./icons/TreeIcon";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <TreeIcon className="footer__logo-icon" />
            <span className="footer__logo-text">Ser Caminho</span>
          </div>
          <p>
            Atendimento multidisciplinar em Psicologia, Avaliação
            Neuropsicológica, Psicopedagogia, Neuropsicopedagogia,
            Fonoaudiologia e Nutrição — com escuta, ética e cuidado em cada
            etapa do caminho.
          </p>
        </div>

        <div className="footer__col">
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
              <a href="#depoimentos">Depoimentos</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <ul>
            <li>Av. Senador Levindo Coelho, 1923</li>
            <li>Vale do Jatobá, Belo Horizonte – MG</li>
            <li>(31) 90000-0000</li>
            <li>contato@sercaminho.com.br</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Redes sociais</h4>
          <ul className="footer__social">
            <li>
              <a
                href="https://www.instagram.com/clinicsercaminho/"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
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
          <p>CRP 00/00000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
