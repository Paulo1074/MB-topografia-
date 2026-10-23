import { useEffect, useState } from 'react'

export const GALLERY_HASH = '#/galeria'

/**
 * Roteamento mínimo por hash (sem biblioteca): `#/galeria` abre a página Galeria;
 * qualquer outro valor (`#servicos`, vazio...) mostra a landing page.
 * Funciona em hospedagem estática sem configuração de servidor.
 */
export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const isGallery = hash === GALLERY_HASH

  // Ao trocar de página: galeria começa no topo; volta à home rola até a âncora pedida.
  useEffect(() => {
    if (isGallery) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.replace('#', '')
    const target = id && !id.startsWith('/') ? document.getElementById(id) : null
    if (target) target.scrollIntoView()
  }, [isGallery, hash])

  return { isGallery }
}
