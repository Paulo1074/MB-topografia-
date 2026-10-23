import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { asset, projects } from '../config/site'
import { useLightbox } from '../hooks/useLightbox'
import Lightbox from './Lightbox'
import LinkButton from './LinkButton'

/**
 * Carrossel de fotos da seção Projetos + link para a página Galeria (#/galeria).
 * As fotos vêm de `projects` em src/config/site.ts (arquivos em public/images/projects/).
 */
export default function Portfolio() {
  const { active, open, close, step } = useLightbox(projects.length)
  const trackRef = useRef<HTMLUListElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.querySelector<HTMLElement>('.carousel__slide')
    const amount = (slide?.offsetWidth ?? el.clientWidth) + 16
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="container">
        <header className="section__header section__header--row reveal">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2 id="projetos-title" className="section__title">
              Trabalhos em campo
            </h2>
            <p className="section__text">
              Registros de levantamentos, equipamentos e áreas atendidas pela MB Topografia.
            </p>
          </div>
          <div className="carousel__nav" aria-label="Controles do carrossel">
            <button
              type="button"
              className="carousel__arrow"
              onClick={() => scrollByPage(-1)}
              disabled={edge.start}
              aria-label="Fotos anteriores"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="carousel__arrow"
              onClick={() => scrollByPage(1)}
              disabled={edge.end}
              aria-label="Próximas fotos"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </header>
      </div>

      <div className="carousel" role="region" aria-roledescription="carrossel" aria-label="Fotos de trabalhos">
        <ul ref={trackRef} className="carousel__track" onScroll={updateEdges}>
          {projects.map((project, i) => (
            <li key={project.id} className="carousel__slide" aria-label={`Foto ${i + 1} de ${projects.length}`}>
              <button
                type="button"
                className="gallery__button"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`Ampliar imagem: ${project.caption ?? project.alt}`}
              >
                <img
                  src={asset(project.src)}
                  alt={project.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  style={{ objectPosition: project.focus }}
                />
                {project.placeholder && <span className="gallery__tag">Imagem ilustrativa</span>}
                <span className="gallery__overlay" aria-hidden="true">
                  <Expand size={20} />
                </span>
                {project.caption && <span className="gallery__caption">{project.caption}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container carousel__footer reveal">
        <LinkButton href="#/galeria" variant="outline" size="lg" icon={<ArrowRight size={20} />}>
          Ver todas as fotos
        </LinkButton>
      </div>

      {active !== null && <Lightbox items={projects} index={active} onClose={close} onStep={step} />}
    </section>
  )
}
