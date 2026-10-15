function ContactIcon({ name, ...props }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {name === 'instagram' ? <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" />
      </> : name === 'whatsapp' ? <>
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.8a8.5 8.5 0 1 1 15.9-4.4Z" />
        <path d="m8.1 7.5 1.3-.2 1.2 2.5-.9 1.1a8.2 8.2 0 0 0 3.4 3.3l1.1-.9 2.4 1.2-.2 1.3c-.2.8-1 1.3-1.8 1.2-4.5-.7-7.5-3.8-8-7.7-.1-.8.6-1.6 1.5-1.8Z" fill="currentColor" stroke="none" />
      </> : name === 'arrow' ? <>
        <path d="M7 17 17 7M7 7h10v10" />
      </> : <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </>}
    </svg>
  )
}

export default ContactIcon
