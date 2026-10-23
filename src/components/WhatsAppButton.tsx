import { whatsappLink } from '../config/site'
import { WhatsAppIcon } from './Icons'

/** Botão flutuante fixo no canto inferior direito, respeitando as áreas seguras do celular. */
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="whatsapp-float__tooltip" aria-hidden="true">
        Falar pelo WhatsApp
      </span>
    </a>
  )
}
