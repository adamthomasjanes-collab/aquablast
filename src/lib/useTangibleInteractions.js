import { useEffect } from 'react'

const revealSelectors = [
  '.trust-proof',
  '.intro',
  '.service-grid',
  '.results',
  '.path',
  '.owner-trust',
  '.customer-trust',
  '.common-questions',
  '.value-guide',
  '.local-area',
  '.final',
  '.service-page main > section',
  '.services-hub-page main > section',
  '.projects-page main > section',
  '.editorial-page main > section',
  '.location-page main > section',
  '.project-page main > section',
  '.proposal-page main > section',
  '.case-study > section',
].join(',')

const staggerSelectors = [
  '.service-grid',
  '.results-showcase-grid',
  '.path ol',
  '.customer-trust-grid',
  '.common-questions-grid',
  '.project-card-grid',
  '.locations-hub-grid',
  '.location-service-grid',
  '.commercial-service-links',
  '.articles-grid',
  '.contact-paths',
  '.review-library-grid',
  '.editorial-facts',
].join(',')

const pointerCardSelectors = [
  '.service-card',
  '.results-showcase-card',
  '.location-service-card:not(.location-service-card-text)',
  '.project-archive-card[href]',
  '.locations-hub-grid > a',
  '.services-hub-card',
].join(',')

function markInitialVisibility(node) {
  const rect = node.getBoundingClientRect()
  if (rect.top < window.innerHeight * 1.12 && rect.bottom > 0) node.classList.add('is-aqua-visible')
}

export function useTangibleInteractions() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined

    const root = document.documentElement
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const finePointer = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false
    const cleanups = []

    root.classList.add('aqua-interactions-ready')

    const revealNodes = Array.from(document.querySelectorAll(revealSelectors))
    revealNodes.forEach((node) => {
      node.dataset.aquaReveal = 'true'
      if (reducedMotion) node.classList.add('is-aqua-visible')
      else markInitialVisibility(node)
    })

    document.querySelectorAll(staggerSelectors).forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        // Gallery thumbnails are persistent controls, not reveal content. Keeping
        // them out of stagger state prevents an intermittent opacity:0 control.
        if (child.closest('.project-photo-thumbnails')) return
        child.dataset.aquaStagger = 'true'
        child.style.setProperty('--aqua-stagger-delay', `${Math.min(index % 6, 5) * 46}ms`)
        if (reducedMotion) child.classList.add('is-aqua-visible')
        else markInitialVisibility(child)
      })
    })

    // Defensive cleanup for route transitions or future selector changes: a
    // gallery thumbnail must always remain visible and selectable.
    document.querySelectorAll('.project-photo-thumbnails button').forEach((button) => {
      delete button.dataset.aquaStagger
      button.style.removeProperty('--aqua-stagger-delay')
      button.classList.add('is-aqua-visible')
    })

    if (!reducedMotion && 'IntersectionObserver' in window) {
      const observed = Array.from(document.querySelectorAll('[data-aqua-reveal], [data-aqua-stagger]'))
        .filter((node) => !node.classList.contains('is-aqua-visible'))
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-aqua-visible')
          observer.unobserve(entry.target)
        })
      }, { rootMargin: '0px 0px 22% 0px', threshold: 0 })
      observed.forEach((node) => observer.observe(node))
      cleanups.push(() => observer.disconnect())
    } else {
      document.querySelectorAll('[data-aqua-reveal], [data-aqua-stagger]').forEach((node) => node.classList.add('is-aqua-visible'))
    }

    if (finePointer && !reducedMotion) {
      document.querySelectorAll(pointerCardSelectors).forEach((card) => {
        card.classList.add('aqua-pointer-card')
        const onMove = (event) => {
          const rect = card.getBoundingClientRect()
          const x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 100
          const y = ((event.clientY - rect.top) / Math.max(rect.height, 1)) * 100
          card.style.setProperty('--aqua-pointer-x', `${x.toFixed(1)}%`)
          card.style.setProperty('--aqua-pointer-y', `${y.toFixed(1)}%`)
        }
        const onLeave = () => {
          card.style.removeProperty('--aqua-pointer-x')
          card.style.removeProperty('--aqua-pointer-y')
        }
        card.addEventListener('pointermove', onMove, { passive: true })
        card.addEventListener('pointerleave', onLeave, { passive: true })
        cleanups.push(() => {
          card.removeEventListener('pointermove', onMove)
          card.removeEventListener('pointerleave', onLeave)
        })
      })
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      root.classList.remove('aqua-interactions-ready')
    }
  }, [])
}
