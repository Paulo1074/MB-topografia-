import { navItems, site, whatsappLink } from '../config/site'
import { InstagramIcon, WhatsAppIcon } from './Icons'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo onDark />
          <p>Topografia e agrimensura em {site.city}.</p>
        </div>

        <nav className="footer__nav" aria-label="Links do rodapé">
          <h2 className="footer__heading">Navegação</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h2 className="footer__heading">Contato</h2>
          <ul>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                <span>{site.whatsapp.displayNumber}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} />
                <span>{site.instagram.handle}</span>
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
