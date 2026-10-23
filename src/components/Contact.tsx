import { Clock, Mail, MapPin } from 'lucide-react'
import { site, whatsappLink } from '../config/site'
import { InstagramIcon, WhatsAppIcon } from './Icons'
import LinkButton from './LinkButton'

/**
 * Endereço, e-mail, horário e mapa só aparecem quando confirmados em src/config/site.ts.
 */
export default function Contact() {
  const showAddress = site.address.confirmed

  return (
    <section id="contato" className="section section--soft" aria-labelledby="contato-title">
      <div className="container contact">
        <div className="contact__main reveal">
          <p className="eyebrow">Contato</p>
          <h2 id="contato-title" className="section__title">
            Fale com a {site.name}
          </h2>
          <p className="section__text">
            O caminho mais rápido é o WhatsApp. Se preferir, acompanhe o trabalho pelo Instagram.
          </p>

          <div className="contact__buttons">
            <LinkButton href={whatsappLink()} size="lg" variant="primary" icon={<WhatsAppIcon size={22} />}>
              Conversar pelo WhatsApp
            </LinkButton>
            <LinkButton href={site.instagram.url} size="lg" variant="outline" icon={<InstagramIcon size={22} />}>
              Acessar Instagram
            </LinkButton>
          </div>
        </div>

        <ul className="contact__list reveal">
          <li>
            <span className="contact__icon" aria-hidden="true">
              <WhatsAppIcon size={20} />
            </span>
            <div>
              <p className="contact__label">WhatsApp</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {site.whatsapp.displayNumber}
              </a>
            </div>
          </li>
          <li>
            <span className="contact__icon" aria-hidden="true">
              <InstagramIcon size={20} />
            </span>
            <div>
              <p className="contact__label">Instagram</p>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                {site.instagram.handle}
              </a>
            </div>
          </li>
          {showAddress && (
            <li>
              <span className="contact__icon" aria-hidden="true">
                <MapPin size={20} />
              </span>
              <div>
                <p className="contact__label">Endereço</p>
                <address>
                  {site.address.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </div>
            </li>
          )}
          {site.email && (
            <li>
              <span className="contact__icon" aria-hidden="true">
                <Mail size={20} />
              </span>
              <div>
                <p className="contact__label">E-mail</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </li>
          )}
          {site.hours && (
            <li>
              <span className="contact__icon" aria-hidden="true">
                <Clock size={20} />
              </span>
              <div>
                <p className="contact__label">Horário de atendimento</p>
                <p>{site.hours}</p>
              </div>
            </li>
          )}
        </ul>

        {site.mapEmbedUrl && (
          <div className="contact__map reveal">
            <iframe
              title={`Mapa de localização da ${site.name}`}
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  )
}
