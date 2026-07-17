# Clínica Ser Caminho — Landing Page

Landing page em React (Vite) para a Clínica Ser Caminho, clínica de psicologia e
desenvolvimento humano. O design segue a identidade visual da marca, usando os
tons pastéis de **rosa**, **azul** e **verde** presentes na logo, sobre um fundo
creme suave.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- CSS puro (variáveis de CSS para o design system de cores/tipografia)

## Estrutura

```
src/
├── assets/                  # Logo e imagem de localização da clínica
├── components/
│   ├── Header.jsx/.css      # Navegação fixa + menu mobile
│   ├── Hero.jsx/.css        # Seção principal de abertura
│   ├── About.jsx/.css       # Sobre a clínica + valores
│   ├── Services.jsx/.css    # Serviços/especialidades oferecidas
│   ├── Approach.jsx/.css    # Como funciona o processo terapêutico
│   ├── Testimonials.jsx/.css # Depoimentos de pacientes
│   ├── Location.jsx/.css    # Localização com mapa
│   ├── Contact.jsx/.css     # Formulário de contato (envia via WhatsApp)
│   ├── Footer.jsx/.css      # Rodapé
│   └── WhatsappButton.jsx/.css # Botão flutuante de WhatsApp
├── App.jsx                  # Composição de todas as seções
└── index.css                # Reset, variáveis de cor/tipografia e utilitários
```

## Paleta de cores

As cores foram extraídas da identidade visual da clínica (logo):

| Cor  | Uso                                  |
|------|---------------------------------------|
| Azul  (`#6fa4c4`) | Cor primária, títulos, CTAs, links |
| Rosa  (`#e5928a`) | Destaques, tags, seção de contato   |
| Verde (`#8b9b78`) | Seção "Abordagem", detalhes de apoio |
| Creme (`#f8f3ea`) | Fundo geral da página                |

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build de produção

```bash
npm run build
npm run preview
```

## Configurações a personalizar

- **Número de WhatsApp**: altere a constante `WHATSAPP_NUMBER` em
  `src/components/Contact.jsx` e `src/components/WhatsappButton.jsx`.
- **Endereço e horários**: edite `src/components/Location.jsx` e `Footer.jsx`.
- **E-mail de contato**: edite `src/components/Contact.jsx`.

## Responsividade

O layout foi construído com CSS Grid/Flexbox e *media queries* para se adaptar a
qualquer tamanho de tela — celulares, tablets, notebooks e monitores grandes —
incluindo um menu mobile dedicado no cabeçalho.
