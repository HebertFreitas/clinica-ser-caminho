import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds, topOffset = 120) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const updateActiveSection = () => {
      if (window.scrollY < topOffset) {
        setActiveSection('')
        return
      }

      const scrollLine = window.scrollY + topOffset + 48
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80

      if (nearBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      let current = sections[0].id

      for (const section of sections) {
        if (section.offsetTop <= scrollLine) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds, topOffset])

  return activeSection
}
