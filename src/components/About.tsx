import { Check } from 'lucide-react'
import { site, values } from '../config/site'

export default function About() {
  return (
    <section id="sobre" className="section section--soft" aria-labelledby="sobre-title">
      <div className="container about">
        <div className="reveal">
          <p className="eyebrow">Sobre a {site.name}</p>
          <h2 id="sobre-title" className="section__title">
            {site.texts.aboutTitle}
          </h2>
          {site.texts.aboutParagraphs.map((p) => (
            <p key={p} className="section__text">
              {p}
            </p>
          ))}
        </div>

        <div className="about__values reveal">
          <h3 className="about__values-title">O que orienta o nosso trabalho</h3>
          <ul>
            {values.map((v) => (
              <li key={v}>
                <span className="about__check" aria-hidden="true">
                  <Check size={16} strokeWidth={3} />
                </span>
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
