import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Expand } from 'lucide-react'
import { asset, galleryCategories, projects, site, whatsappLink, type GalleryCategory } from '../config/site'
import { useLightbox } from '../hooks/useLightbox'
import { WhatsAppIcon } from './Icons'
import Lightbox from './Lightbox'
import LinkButton from './LinkButton'

type Filter = 'todas' | GalleryCategory

/** Página "Galeria" (#/galeria): todas as fotos, com filtro por categoria e ampliação. */
export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('todas')

  // Só mostra filtros das categorias que realmente têm foto.
  const available = useMemo(
    () => (Object.keys(galleryCategories) as GalleryCategory[]).filter((c) => projects.some((p) => p.category === c)),
    [],
  )
  const items = useMemo(
    () => (filter === 'todas' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )
  const { active, open, close, step } = useLightbox(items.length)

  useEffect(() => {
    const previous = document.title
    document.title = `Galeria de fotos | ${site.name}`
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <section className="gallery-page" aria-labelledby="galeria-title">
      <div className="container">
        <a className="gallery-page__back" href="#inicio">
          <ArrowLeft size={18} aria-hidden="true" />
          <span>Voltar ao site</span>
        </a>

        <header className="gallery-page__header">
          <p className="eyebrow">Galeria</p>
          <h1 id="galeria-title" className="section__title">
            Galeria de fotos
          </h1>
          <p className="section__text">
            Veja registros de levantamentos, equipamentos e áreas atendidas pela {site.name}. Toque em uma foto para ampliar.
          </p>
        </header>

        {available.length > 1 && (
          <div className="filters" role="group" aria-label="Filtrar fotos por categoria">
            {(['todas', ...available] as Filter[]).map((key) => (
              <button
                key={key}
                type="button"
                className={`filters__chip ${filter === key ? 'is-active' : ''}`}
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
              >
                {key === 'todas' ? 'Todas' : galleryCategories[key]}
              </button>
            ))}
          </div>
        )}

        <p className="gallery-page__count" aria-live="polite">
          {items.length} {items.length === 1 ? 'foto' : 'fotos'}
        </p>

        <ul className="gallery">
          {items.map((project, i) => (
            <li key={project.id} className="gallery__item">
              <button
                type="button"
                className="gallery__button"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`Ampliar imagem: ${project.caption ?? project.alt}`}
              >
                <img src={asset(project.src)} alt={project.alt} width={800} height={600} loading="lazy" decoding="async" style={{ objectPosition: project.focus }} />
                {project.placeholder && <span className="gallery__tag">Imagem ilustrativa</span>}
                <span className="gallery__overlay" aria-hidden="true">
                  <Expand size={20} />
                </span>
                {project.caption && <span className="gallery__caption">{project.caption}</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className="gallery-page__cta">
          <p>Quer saber mais sobre algum trabalho ou solicitar um orçamento?</p>
          <LinkButton href={whatsappLink()} size="lg" variant="primary" icon={<WhatsAppIcon size={22} />}>
            Falar pelo WhatsApp
          </LinkButton>
        </div>
      </div>

      {active !== null && <Lightbox items={items} index={active} onClose={close} onStep={step} />}
    </section>
  )
}
