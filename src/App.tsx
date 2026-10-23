import About from './components/About'
import Contact from './components/Contact'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import GalleryPage from './components/GalleryPage'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import WhatsAppButton from './components/WhatsAppButton'
import { useHashRoute } from './hooks/useHashRoute'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const { isGallery } = useHashRoute()
  useReveal(isGallery)

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header solid={isGallery} />
      <main id="conteudo">
        {isGallery ? (
          <GalleryPage />
        ) : (
          <>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <ContactCTA />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
