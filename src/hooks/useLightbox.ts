import { useCallback, useRef, useState } from 'react'

/** Controla abertura/fechamento do lightbox devolvendo o foco ao item que o abriu. */
export function useLightbox(total: number) {
  const [active, setActive] = useState<number | null>(null)
  const trigger = useRef<HTMLElement | null>(null)

  const open = useCallback((index: number, el: HTMLElement) => {
    trigger.current = el
    setActive(index)
  }, [])

  const close = useCallback(() => {
    setActive(null)
    trigger.current?.focus()
  }, [])

  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null || total === 0 ? i : (i + dir + total) % total)),
    [total],
  )

  return { active, open, close, step }
}
