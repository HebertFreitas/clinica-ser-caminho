import { useEffect, useRef, useState } from 'react'
import portraitUrl from '../assets/hero-foto-enviada.png'
import './Hero.css'

const TRANSPARENT_MASK = 'linear-gradient(transparent, transparent)'

function HeroTitle(props) {
  return (
    <h1 className="hero__title" {...props}>
      Um espaço de escuta.
      <br />
      <span>Um caminho de cuidado.</span>
    </h1>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const [jsReady, setJsReady] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [cloneVisible, setCloneVisible] = useState(false)
  const cloneVisibleRef = useRef(false)

  useEffect(() => {
    cloneVisibleRef.current = cloneVisible
  }, [cloneVisible])

  useEffect(() => {
    const hero = heroRef.current
    const title = titleRef.current
    if (!hero || !title) return undefined

    setJsReady(true)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let rect = title.getBoundingClientRect()
    let frame = 0
    let pointerActive = false
    let touchY = null

    const setMask = (value) => {
      title.style.webkitMaskImage = value
      title.style.maskImage = value
      title.style.webkitMaskSize = '100% 100%'
      title.style.maskSize = '100% 100%'
    }

    const sizeCanvas = () => {
      rect = title.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(rect.width))
      canvas.height = Math.max(1, Math.round(rect.height))
    }

    const clearMask = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setMask(TRANSPARENT_MASK)
    }

    const draw = () => {
      const radius = Math.max(190, Math.min(260, rect.width * 0.25))
      const x = current.x - rect.left
      const y = current.y - rect.top
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, 'rgba(0,0,0,1)')
      gradient.addColorStop(0.4, 'rgba(0,0,0,1)')
      gradient.addColorStop(0.6, 'rgba(0,0,0,.75)')
      gradient.addColorStop(0.75, 'rgba(0,0,0,.4)')
      gradient.addColorStop(0.88, 'rgba(0,0,0,.12)')
      gradient.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      setMask(`url(${canvas.toDataURL('image/png')})`)
    }

    const tick = () => {
      const ease = reducedMotion.matches ? 1 : 0.18
      current.x += (target.x - current.x) * ease
      current.y += (target.y - current.y) * ease
      draw()
      const settled = Math.abs(target.x - current.x) <= 0.5 && Math.abs(target.y - current.y) <= 0.5
      frame = settled ? 0 : requestAnimationFrame(tick)
    }

    const onPointer = (event) => {
      if (event.pointerType !== 'mouse' || !finePointer.matches || cloneVisibleRef.current) return
      rect = title.getBoundingClientRect()
      if (!pointerActive) {
        pointerActive = true
        current.x = event.clientX
        current.y = event.clientY
      }
      target.x = event.clientX
      target.y = event.clientY
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onLeave = () => {
      pointerActive = false
      cancelAnimationFrame(frame)
      frame = 0
      clearMask()
    }

    const onWheel = (event) => {
      if (event.deltaY > 0) setCloneVisible(true)
      else if (event.deltaY < 0) setCloneVisible(false)
    }

    const onTouchStart = (event) => {
      touchY = event.touches[0].clientY
    }

    const onTouchMove = (event) => {
      if (touchY === null) return
      const y = event.touches[0].clientY
      const delta = touchY - y
      if (delta > 10) setCloneVisible(true)
      else if (delta < -10) setCloneVisible(false)
      touchY = y
    }

    const onTouchEnd = () => {
      touchY = null
    }

    const onKeyDown = (event) => {
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) setCloneVisible(true)
      else if (['ArrowUp', 'PageUp'].includes(event.key)) setCloneVisible(false)
    }

    const onResize = () => {
      sizeCanvas()
      if (!pointerActive) clearMask()
    }

    const onPageHide = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }

    hero.addEventListener('pointerenter', onPointer)
    hero.addEventListener('pointermove', onPointer)
    hero.addEventListener('pointerleave', onLeave)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    window.addEventListener('pagehide', onPageHide)

    sizeCanvas()
    clearMask()
    document.fonts?.ready.then(sizeCanvas)
    const readyFrame = requestAnimationFrame(() => setIsReady(true))

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(readyFrame)
      hero.removeEventListener('pointerenter', onPointer)
      hero.removeEventListener('pointermove', onPointer)
      hero.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pagehide', onPageHide)
    }
  }, [])

  const classes = ['hero', jsReady && 'hero--js', isReady && 'is-ready'].filter(Boolean).join(' ')

  return (
    <section id="topo" ref={heroRef} className={classes} aria-labelledby="hero-title" tabIndex={0}>
      <div className="hero__content">
        <p className="hero__eyebrow">Psicologia • Escuta • Acolhimento</p>
        <span className="hero__signature" aria-hidden="true">
          SER CAMINHO
        </span>
        <HeroTitle id="hero-title" ref={titleRef} />
        <HeroTitle
          aria-hidden="true"
          className={`hero__title hero__title--clone${cloneVisible ? ' is-visible' : ''}`}
        />
      </div>

      <img
        className="hero__portrait"
        src={portraitUrl}
        alt="Profissional de psicologia sentada em uma poltrona, sorrindo em uma postura acolhedora"
        width="1952"
        height="1273"
        fetchPriority="high"
      />

      <div className="hero__credits">
        <span>Débora Emily, fundadora e psicóloga </span>
        <span>Psicologia e desenvolvimento</span>
      </div>
    </section>
  )
}

export default Hero
