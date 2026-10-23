import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { asset, type Project } from '../config/site'

interface LightboxProps {
  items: Project[]
  index: number
  onClose: () => void
  onStep: (dir: 1 | -1) => void
}

/** Visualizador de imagem em tela cheia: Esc fecha, setas navegam, foco preso no modal. */
export default function Lightbox({ items, index, onClose, onStep }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const current = items[index]
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
      if (e.key === 'Tab') {
        const focusables = document.querySelectorAll<HTMLElement>('.lightbox button')
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onStep])

  if (!current) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current.caption ?? current.alt}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1)
      }}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Fechar imagem">
        <X size={24} />
      </button>
      <button type="button" className="lightbox__btn lightbox__prev" onClick={() => onStep(-1)} aria-label="Imagem anterior">
        <ChevronLeft size={28} />
      </button>
      <figure className="lightbox__figure">
        <img src={asset(current.src)} alt={current.alt} />
        <figcaption>
          {current.placeholder && <strong>Imagem ilustrativa · </strong>}
          {current.caption}
          <span className="lightbox__count"> ({index + 1}/{items.length})</span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox__btn lightbox__next" onClick={() => onStep(1)} aria-label="Próxima imagem">
        <ChevronRight size={28} />
      </button>
    </div>
  )
}
