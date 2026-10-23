import { site, whatsappLink } from '../config/site'
import { WhatsAppIcon } from './Icons'
import LinkButton from './LinkButton'

export default function ContactCTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__bg" aria-hidden="true" />
      <div className="container cta__inner reveal">
        <h2 id="cta-title" className="cta__title">
          {site.texts.ctaTitle}
        </h2>
        <p className="cta__text">{site.texts.ctaText}</p>
        <LinkButton href={whatsappLink()} size="lg" variant="primary" icon={<WhatsAppIcon size={24} />}>
          Solicite Orçamento pelo WhatsApp
        </LinkButton>
      </div>
    </section>
  )
}
