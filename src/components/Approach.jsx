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

function Approach() {
  return (
    <section id="abordagem" className="section approach">
      <div className="container">
        <div className="section-heading center">
          <span className="section-tag">nossa abordagem</span>
          <h2>Como funciona o seu processo de atendimento</h2>
          <p>
            Um caminho estruturado, mas flexível, pensado para respeitar o seu tempo e as
            suas necessidades em qualquer especialidade da clínica.
          </p>
        </div>

        <div className="approach__steps">
          {STEPS.map((step, index) => (
            <div key={step.number} className="approach__step">
              <div className="approach__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < STEPS.length - 1 && <span className="approach__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
