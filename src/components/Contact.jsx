import { useState } from 'react'
import './Contact.css'

const WHATSAPP_NUMBER = '5531975032248'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.name || ''}.\nTelefone: ${form.phone || ''}\nMensagem: ${
        form.message || 'Gostaria de agendar uma consulta.'
      }`,
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section id="contato" className="section contact">
      <div className="container contact__inner">
        <div className="contact__text reveal">
          <span className="section-tag section-tag--light">vamos conversar</span>
          <h2>Estamos prontos para acolher você e sua família.</h2>
          <p>
            Preencha o formulário ou fale diretamente pelo WhatsApp para agendar um
            atendimento em qualquer especialidade da nossa equipe — Psicologia, Avaliação
            Neuropsicológica, Psicopedagogia, Neuropsicopedagogia, Fonoaudiologia ou Nutrição.
          </p>

          <div className="contact__details">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              (31) 97503-2248 · WhatsApp
            </a>
            <a href="mailto:contato@sercaminho.com.br">contato@sercaminho.com.br</a>
            <a
              href="https://www.instagram.com/clinicsercaminho/"
              target="_blank"
              rel="noreferrer"
            >
              @clinicsercaminho · Instagram
            </a>
          </div>
        </div>

        <form className="contact__form reveal reveal-delay-2" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Conte um pouco sobre o que você procura"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-outline-white contact__submit">
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
