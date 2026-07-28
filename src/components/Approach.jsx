import './Approach.css'

const STEPS = [
  {
    number: '01',
    title: 'Primeiro contato',
    description:
      'Você entra em contato conosco e agendamos uma conversa inicial para entender sua necessidade e indicar a especialidade mais adequada.',
  },
  {
    number: '02',
    title: 'Avaliação inicial',
    description:
      'Um encontro para conhecer sua história e definir, junto com o profissional responsável, os objetivos do atendimento.',
  },
  {
    number: '03',
    title: 'Acompanhamento contínuo',
    description:
      'Sessões regulares, no seu ritmo, com um plano de cuidado personalizado para a especialidade escolhida.',
  },
  {
    number: '04',
    title: 'Evolução e autonomia',
    description:
      'Você desenvolve novas ferramentas e conquista mais autonomia, qualidade de vida e bem-estar.',
  },
]

const DELAY_CLASS = [' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3', ' reveal-delay-4']

function Approach() {
  return (
    <section id="abordagem" className="section approach">
      <div className="container">
        <div className="section-heading center reveal">
          <span className="section-tag">nossa abordagem</span>
          <h2>Como funciona o seu processo de atendimento</h2>
          <p>
            Um caminho estruturado, mas flexível, pensado para respeitar o seu tempo e as
            suas necessidades em qualquer especialidade da clínica.
          </p>
        </div>

        <ol className="approach__timeline">
          {STEPS.map((step, index) => (
            <li
              key={step.number}
              className={`approach__step reveal${DELAY_CLASS[index]}`}
            >
              <div className="approach__marker">
                <span className="approach__number">{step.number}</span>
              </div>
              <div className="approach__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Approach
