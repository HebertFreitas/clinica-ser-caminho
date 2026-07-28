import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Ana P.',
    role: 'Psicoterapia',
    quote:
      'Encontrei um espaço de escuta genuína, onde pude falar sobre o que sentia sem medo de julgamento. Hoje me sinto mais equilibrada.',
  },
  {
    name: 'Bruno T.',
    role: 'Avaliação Neuropsicológica',
    quote:
      'O processo de avaliação foi conduzido com muito cuidado e clareza. Recebemos orientações que fizeram toda a diferença no dia a dia.',
  },
  {
    name: 'Camila R.',
    role: 'Nutrição',
    quote:
      'O acompanhamento nutricional me ajudou a construir uma relação mais saudável com a alimentação, no meu tempo e sem cobranças.',
  },
]

const DELAY_CLASS = [' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3']

function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="section-heading center reveal">
          <span className="section-tag">depoimentos</span>
          <h2>Histórias de quem já caminhou com a gente</h2>
          <p>O que quem já passou por diferentes especialidades diz sobre a Clínica Ser Caminho.</p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`testimonials__card testimonials__card--${index + 1} reveal${DELAY_CLASS[index]}`}
            >
              <blockquote>
                <span className="testimonials__quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                {testimonial.quote}
              </blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
