import { HardHat, MapPin, Satellite, type LucideIcon } from 'lucide-react'
import { services, servicesConfirmed, site, whatsappLink, type ServiceIcon } from '../config/site'
import { WhatsAppIcon } from './Icons'
import LinkButton from './LinkButton'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  'map-pin': MapPin,
  satellite: Satellite,
  'hard-hat': HardHat,
}

export default function Services() {
  return (
    <section id="servicos" className="section" aria-labelledby="servicos-title">
      <div className="container">
        <header className="section__header section__header--center reveal">
          <h2 id="servicos-title" className="section__title">
            {site.texts.servicesTitle}
          </h2>
          {!servicesConfirmed && (
            <p className="badge" role="note">
              Lista em validação
            </p>
          )}
        </header>

        <ul className="services__grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <li key={service.id} className="card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="card__icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
                <h3 className="card__title">{service.title}</h3>
                <p className="card__text">{service.description}</p>
                <LinkButton
                  href={whatsappLink(`Olá! Gostaria de informações sobre: ${service.title}.`)}
                  variant="ghost"
                  icon={<WhatsAppIcon size={18} />}
                  className="card__cta"
                >
                  Consultar pelo WhatsApp
                </LinkButton>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
