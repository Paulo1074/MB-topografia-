import { Crosshair } from 'lucide-react'
import { asset, heroImages, site, whatsappLink } from '../config/site'
import LinkButton from './LinkButton'

export default function Hero() {
  const [a, b, c] = heroImages
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            {site.texts.heroTitle}
          </h1>
          <p className="hero__subtitle">{site.texts.heroSubtitle}</p>

          <div className="hero__buttons">
            <LinkButton href={whatsappLink()} size="lg" icon={<Crosshair size={20} />} iconAfter>
              Solicite Orçamento
            </LinkButton>
            <LinkButton href="#servicos" size="lg" variant="outline-light">
              Conheça Nossos Serviços
            </LinkButton>
          </div>
        </div>

        <div className="hero__visual">
          <figure className="hero__tile hero__tile--a">
            <img src={asset(a.src)} alt={a.alt} style={{ objectPosition: a.focus }} width={600} height={640} fetchPriority="high" />
          </figure>
          <figure className="hero__tile hero__tile--b">
            <img src={asset(b.src)} alt={b.alt} style={{ objectPosition: b.focus }} width={600} height={400} />
          </figure>
          <figure className="hero__tile hero__tile--c">
            <img src={asset(c.src)} alt={c.alt} style={{ objectPosition: c.focus }} width={600} height={400} />
          </figure>
        </div>
      </div>
    </section>
  )
}
