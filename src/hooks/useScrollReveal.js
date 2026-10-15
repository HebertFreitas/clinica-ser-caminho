import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let startFrame = 0
    const root = document.documentElement
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const threshold = Number(entry.target.dataset.revealThreshold || .08)
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            entry.target.classList.add('is-visible')
          } else if (entry.boundingClientRect.top > window.innerHeight) {
            // Replay when a section is approached again from above.
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: [0.08, 0.18, 0.22], rootMargin: '0px 0px -24px 0px' },
    )

    const configureMotion = () => {
      observer.disconnect()
      elements.forEach((el) => {
        el.classList.toggle('reveal--pending', !reducedMotion.matches)
        el.classList.remove('is-visible')
        if (!reducedMotion.matches) observer.observe(el)
      })
    }

    const updateProgress = () => {
      const distance = root.scrollHeight - window.innerHeight
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0
      root.style.setProperty('--scroll-progress', progress)
      frame = 0
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress)
    }

    // Commit the initial state before observing, so first-screen entries animate too.
    elements.forEach((el) => el.classList.toggle('reveal--pending', !reducedMotion.matches))
    startFrame = requestAnimationFrame(configureMotion)
    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    reducedMotion.addEventListener('change', configureMotion)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      cancelAnimationFrame(startFrame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      reducedMotion.removeEventListener('change', configureMotion)
      elements.forEach((el) => el.classList.remove('reveal--pending', 'is-visible'))
      root.style.removeProperty('--scroll-progress')
    }
  }, [])
}
