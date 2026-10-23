import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navItems, site, whatsappLink } from '../config/site'
import { InstagramIcon } from './Icons'
import LinkButton from './LinkButton'
import Logo from './Logo'

export default function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha com Esc e trava a rolagem do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  // Volta ao layout desktop → garante menu fechado.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open || solid ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" aria-label={`${site.name} — ir para o início`} onClick={close}>
          <Logo />
        </a>

        <nav id="menu-principal" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__mobile-actions">
            <LinkButton href={whatsappLink()} size="lg" icon={<ArrowRight size={18} />} iconAfter onClick={close}>
              Solicite Orçamento
            </LinkButton>
            <LinkButton
              href={site.instagram.url}
              variant="outline"
              size="lg"
              icon={<InstagramIcon size={20} />}
              onClick={close}
            >
              Instagram
            </LinkButton>
          </div>
        </nav>

        <div className="header__actions">
          <a
            className="icon-link header__instagram"
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.instagram.handle} (abre em nova aba)`}
          >
            <InstagramIcon size={20} />
          </a>
          <LinkButton href={whatsappLink()} className="header__cta" icon={<ArrowRight size={18} />} iconAfter>
            Solicite Orçamento
          </LinkButton>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}
