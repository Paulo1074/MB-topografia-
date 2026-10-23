import { useEffect } from 'react'

/**
 * Animação de entrada leve: elementos com a classe `.reveal` ganham `.is-visible`
 * ao entrar na tela. Sem JS/IntersectionObserver ou com "reduzir movimento",
 * tudo aparece imediatamente.
 */
export function useReveal(routeKey?: unknown) {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [routeKey])
}
