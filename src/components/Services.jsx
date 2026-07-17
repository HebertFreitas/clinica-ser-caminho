import './Services.css'

const SERVICES = [
  {
    title: 'Psicologia',
    description:
      'Acompanhamento psicoterapêutico para crianças, adolescentes e adultos, com escuta acolhedora e cuidado com a saúde emocional.',
    color: 'blue',
  },
  {
    title: 'Avaliação Neuropsicológica',
    description:
      'Avaliação completa dos processos cognitivos, atencionais e emocionais, auxiliando no diagnóstico e no planejamento terapêutico.',
    color: 'pink',
  },
  {
    title: 'Psicopedagogia',
    description:
      'Intervenção especializada nas dificuldades de aprendizagem, fortalecendo o desenvolvimento escolar e a autonomia nos estudos.',
    color: 'green',
  },
  {
    title: 'Neuropsicopedagogia',
    description:
      'Abordagem que integra neurociência e pedagogia para compreender e potencializar os processos de aprendizagem.',
    color: 'blue',
  },
  {
    title: 'Fonoaudiologia',
    description:
      'Cuidado com a comunicação, linguagem, fala e voz, favorecendo o desenvolvimento e a qualidade de vida em cada fase.',
    color: 'pink',
  },
  {
    title: 'Nutrição',
    description:
      'Orientação nutricional individualizada, com foco em saúde, bem-estar e uma relação equilibrada com a alimentação.',
    color: 'green',
  },
]

function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-heading center">
          <span className="section-tag">nossos serviços</span>
          <h2>Cuidado especializado para cada momento da sua vida</h2>
          <p>
            Uma equipe multidisciplinar para acompanhar você e sua família em cada fase do
            desenvolvimento, sempre com escuta atenta e cuidado individualizado.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className={`services__card services__card--${service.color}`}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
