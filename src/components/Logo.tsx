import { MapPin } from 'lucide-react'
import { asset, site } from '../config/site'

/**
 * Logotipo. Enquanto o arquivo oficial não for fornecido, exibe a marca textual MBTOPOGRAFIA + cidade.
 * Para usar o logotipo real: coloque em public/images/logo/logo.svg (ou .png)
 * e defina `logo: 'images/logo/logo.svg'` em src/config/site.ts.
 */
export default function Logo({ onDark = false }: { onDark?: boolean }) {
  if (site.logo) {
    return <img className="logo__img" src={asset(site.logo)} alt={site.name} height={44} />
  }
  return (
    <span className={`logo ${onDark ? 'logo--on-dark' : ''}`}>
      <span className="logo__word">MBTOPOGRAFIA</span>
      <span className="logo__city">
        <MapPin size={13} aria-hidden="true" />
        Araxá-MG
      </span>
    </span>
  )
}
