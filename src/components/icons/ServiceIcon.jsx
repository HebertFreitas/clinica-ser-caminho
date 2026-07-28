const ICONS = {
  psychology: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6 22v-2a6 6 0 0 1 12 0v2" />
      <path d="M12 11v4" />
      <path d="M9.5 14.5h5" />
    </>
  ),
  neuro: (
    <>
      <path d="M12 3c-2 2-4 4-4 7a4 4 0 0 0 8 0c0-3-2-5-4-7z" />
      <path d="M8 14v3M12 14v5M16 14v3" />
      <path d="M6 20h12" />
    </>
  ),
  psychopedagogy: (
    <>
      <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M4 19h16" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  neuropsycho: (
    <>
      <path d="M12 2v4M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
      <circle cx="12" cy="12" r="4" />
      <path d="M2 12h4M18 12h4" />
    </>
  ),
  speech: (
    <>
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M8 14h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z" />
      <path d="M12 18v4" />
    </>
  ),
  nutrition: (
    <>
      <path d="M12 3C8 3 5 6 5 10c0 4 3 7 7 11 4-4 7-7 7-11 0-4-3-7-7-7z" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
}

function ServiceIcon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

export default ServiceIcon
