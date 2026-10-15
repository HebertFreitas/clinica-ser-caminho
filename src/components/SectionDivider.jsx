function SectionDivider({ from = 'cream', to = 'white', flip = false }) {
  const colors = {
    hero: '#ede5de',
    cream: '#f8f3ea',
    white: '#fffdf9',
    green: '#f1f4ea',
    creamDark: '#f1e8d8',
  }

  const fillFrom = colors[from] ?? colors.cream
  const fillTo = colors[to] ?? colors.white

  return (
    <div className={`section-divider reveal${flip ? ' section-divider--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill={fillTo}
        />
        <path
          d="M0,0 L1440,0 L1440,38 C1260,28 1080,58 720,28 C360,-2 180,18 0,38 Z"
          fill={fillFrom}
        />
      </svg>
    </div>
  )
}

export default SectionDivider
