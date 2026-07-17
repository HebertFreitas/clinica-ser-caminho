import "./About.css";

const VALUES = [
  {
    title: "Acolhimento",
    description:
      "Um espaço livre de julgamentos, onde cada pessoa e sua família são ouvidas com empatia, respeito e atenção às suas particularidades.",
    color: "pink",
  },
  {
    title: "Ética e Ciência",
    description:
      "Sigilo absoluto, ética profissional e prática fundamentada em evidências científicas em cada atendimento, em todas as especialidades.",
    color: "blue",
  },
  {
    title: "Atendimento Integrado",
    description:
      "Equipe multidisciplinar que atua de forma integrada para acompanhar você e sua família em cada etapa do desenvolvimento.",
    color: "green",
  },
];

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="section-tag">sobre a clínica</span>
          <h2>Um caminho de escuta, ética e cuidado integrado</h2>
          <p>
            A Clínica Ser Caminho é um espaço multidisciplinar dedicado ao
            desenvolvimento humano em suas diferentes dimensões. Reunimos
            profissionais de Psicologia, Avaliação Neuropsicológica,
            Psicopedagogia, Neuropsicopedagogia, Fonoaudiologia e Nutrição
            para oferecer um cuidado verdadeiramente integrado.
          </p>
          <p>
            Acreditamos que cada pessoa tem sua própria jornada, e nosso papel
            é caminhar ao lado dela combinando ciência, ética e sensibilidade —
            respeitando a individualidade de cada história em um ambiente
            acolhedor e seguro.
          </p>
        </div>

        <div className="about__values">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className={`about__card about__card--${value.color}`}
            >
              <span className="about__card-dot" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
