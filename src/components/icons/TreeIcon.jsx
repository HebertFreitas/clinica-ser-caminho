function TreeIcon({ className, title = 'Ser Caminho' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
    >
      <path d="M50 92 L50 52" />
      <path d="M50 66 Q38 62 30 50 Q24 41 26 30" />
      <path d="M50 66 Q62 62 70 50 Q76 41 74 30" />
      <path d="M50 56 Q42 50 38 40 Q35 32 39 22" />
      <path d="M50 56 Q58 50 62 40 Q65 32 61 22" />
      <path d="M26 30 Q20 24 21 15" />
      <path d="M26 30 Q30 23 37 20" />
      <path d="M74 30 Q80 24 79 15" />
      <path d="M74 30 Q70 23 63 20" />
      <path d="M39 22 Q37 15 41 9" />
      <path d="M61 22 Q63 15 59 9" />
    </svg>
  )
}

export default TreeIcon
