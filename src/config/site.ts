/**
 * CONFIGURAÇÃO CENTRALIZADA — MB Topografia
 * ---------------------------------------------------------------
 * Todas as informações editáveis do site ficam neste arquivo.
 * Campos com `confirmed: false` / `null` NÃO são exibidos no site
 * até que o cliente confirme (ver README.md → "Pendências").
 */

/** Resolve caminhos de arquivos da pasta /public respeitando o `base` do Vite. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// ---------------------------------------------------------------
// Contato oficial
// ---------------------------------------------------------------
const WHATSAPP_NUMBER = '5534988060579' // somente dígitos (DDI + DDD + número)
const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Conheci a MB Topografia pelo site e gostaria de mais informações sobre os serviços.'

export const site = {
  name: 'MB Topografia',
  city: 'Araxá – MG',

  whatsapp: {
    number: WHATSAPP_NUMBER,
    displayNumber: '+55 34 98806-0579',
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    defaultMessage: WHATSAPP_DEFAULT_MESSAGE,
  },

  instagram: {
    handle: '@mbtopografiaaax',
    url: 'https://www.instagram.com/mbtopografiaaax/',
  },

  // ---- PENDENTES DE CONFIRMAÇÃO (não aparecem no site enquanto confirmed = false / null) ----
  address: {
    confirmed: false, // ← mude para true após o cliente confirmar
    // Endereço encontrado no perfil do Instagram — AGUARDANDO CONFIRMAÇÃO:
    lines: ['Av. Prefeito Aracely de Paula', 'Araxá – MG', 'CEP 38183-200'],
  },
  email: null as string | null, // ex.: 'contato@exemplo.com.br' (somente quando fornecido)
  hours: null as string | null, // ex.: 'Segunda a sexta, 8h às 18h' (somente quando confirmado)
  /** URL do <iframe> do Google Maps (somente com a localização exata confirmada). */
  mapEmbedUrl: null as string | null,

  /** Logotipo oficial → public/images/logo/logo.svg e use 'images/logo/logo.svg'. null = marca textual. */
  logo: null as string | null,

  texts: {
    heroTitle: 'Topografia de Precisão',
    heroSubtitle:
      'Soluções geodésicas e topográficas em Araxá-MG com precisão, confiança e atendimento profissional para o seu projeto.',
    servicesTitle: 'Nossos Serviços',
    aboutTitle: 'Medição cuidadosa para decisões seguras.',
    aboutParagraphs: [
      'A MB Topografia atua em Araxá, Minas Gerais, oferecendo soluções em topografia e agrimensura para quem precisa conhecer e documentar a realidade do terreno com exatidão.',
      'Medições precisas e levantamentos bem organizados são a base de qualquer projeto: ajudam a evitar retrabalho, esclarecem limites e dão segurança para as próximas etapas.',
      'Cada demanda é analisada de acordo com a sua necessidade, com comunicação clara sobre o que será feito.',
    ],
    ctaTitle: 'Vamos conversar sobre seu projeto?',
    ctaText:
      'Entre em contato com a MB Topografia e explique o que você precisa. Converse diretamente com a nossa equipe para conhecer os próximos passos.',
  },
}

/** Gera o link do WhatsApp com mensagem pré-preenchida (encodeURIComponent). */
export const whatsappLink = (message: string = site.whatsapp.defaultMessage) =>
  `${site.whatsapp.url}?text=${encodeURIComponent(message)}`

// ---------------------------------------------------------------
// Navegação
// ---------------------------------------------------------------
export const navItems = [
  { label: 'Home', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Galeria', href: '#/galeria' },
  { label: 'Contato', href: '#contato' },
]

// ---------------------------------------------------------------
// Fotos do hero (3 imagens reais, já existentes em public/images/projects/)
// `focus` ajusta o recorte (CSS object-position).
// ---------------------------------------------------------------
export const heroImages = [
  { src: 'images/projects/estacao-total-patio.jpg', alt: 'Estação total sobre tripé em pátio pavimentado', focus: '50% 50%' },
  { src: 'images/projects/obra-canteiro.jpg', alt: 'Estação total sobre tripé em canteiro de obras', focus: '50% 50%' },
  { src: 'images/projects/tripe-terreno-urbano.jpg', alt: 'Equipamento topográfico sobre tripé em terreno urbano', focus: '58% 50%' },
] as const

// ---------------------------------------------------------------
// Serviços
// ---------------------------------------------------------------
/**
 * ⚠️ LISTA EM VALIDAÇÃO — os serviços definitivos serão confirmados pelo cliente.
 * Para editar: altere, remova ou adicione itens abaixo.
 * `icon` deve ser um nome existente em src/components/Services.tsx (iconMap).
 * Quando o cliente validar a lista, mude `servicesConfirmed` para true.
 */
export const servicesConfirmed = false

export type ServiceIcon = 'map-pin' | 'satellite' | 'hard-hat'

export interface Service {
  id: string
  icon: ServiceIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'levantamento-planialtimetrico',
    icon: 'map-pin',
    title: 'Levantamento Planialtimétrico',
    description: 'Mapeamento preciso de terreno com curvas de nível, cotas e dados para projetos civis e arquitetônicos.',
  },
  {
    id: 'georreferenciamento',
    icon: 'satellite',
    title: 'Georreferenciamento',
    description: 'Posicionamento de imóveis em um sistema de referência, com precisão técnica para apoiar a documentação da área.',
  },
  {
    id: 'locacao-de-obras',
    icon: 'hard-hat',
    title: 'Locação de Obras',
    description: 'Marcação precisa de pontos para a execução de obras, com alta precisão e segurança.',
  },
]

// ---------------------------------------------------------------
// Valores (seção Sobre)
// ---------------------------------------------------------------
export const values = [
  'Atenção aos detalhes',
  'Precisão técnica',
  'Atendimento profissional',
  'Soluções adequadas a cada projeto',
  'Organização e clareza no atendimento',
]

// ---------------------------------------------------------------
// Portfólio
// ---------------------------------------------------------------
export const galleryCategories = {
  campo: 'Levantamentos em campo',
  equipamentos: 'Equipamentos',
  terrenos: 'Terrenos e áreas',
  rural: 'Propriedades rurais',
  obras: 'Obras e projetos',
} as const

export type GalleryCategory = keyof typeof galleryCategories

export interface Project {
  id: string
  /** Categoria usada nos filtros da página Galeria. */
  category: GalleryCategory
  /** Caminho dentro de /public. */
  src: string
  alt: string
  caption?: string
  /** Enquadramento do recorte nas miniaturas (CSS object-position), ex.: '50% 30%'. A foto ampliada sempre aparece inteira. */
  focus?: string
  /** true = imagem provisória (aparece com selo "Imagem ilustrativa"). */
  placeholder: boolean
}

/**
 * ▶ COMO SUBSTITUIR OS PLACEHOLDERS POR FOTOS REAIS
 * 1. Copie a foto para: public/images/projects/  (ex.: levantamento-01.jpg)
 * 2. No item correspondente abaixo, altere:
 *      src: 'images/projects/levantamento-01.jpg'
 *      placeholder: false
 *      alt: descrição real da foto
 *      caption: legenda (opcional)
 * 3. Para adicionar mais fotos, copie um bloco e preencha. Para remover, apague o bloco.
 *    `category` define o filtro na página Galeria: campo | equipamentos | terrenos | rural | obras.
 *    As fotos aparecem no carrossel da seção Projetos e na página Galeria (#/galeria).
 * Recomendação: fotos em proporção 4:3, JPG/WebP, até ~300 KB cada.
 * Só publique fotos de obras/projetos com autorização do cliente atendido.
 */
export const projects: Project[] = [
  { id: 'obra-canteiro', category: 'obras', src: 'images/projects/obra-canteiro.jpg', alt: 'Estação total sobre tripé em canteiro de obras, com escavação, estruturas de aço e máquinas ao fundo', caption: 'Estação total em canteiro de obras', placeholder: false },
  { id: 'profissional-area-rural', category: 'rural', src: 'images/projects/profissional-area-rural.jpg', alt: 'Profissional de chapéu de palha ao lado de veículo com a identidade da MB Topografia, em estrada de terra junto a plantação', caption: 'Em campo, área rural', placeholder: false },
  { id: 'estacao-total-guarda-sol', category: 'terrenos', src: 'images/projects/estacao-total-guarda-sol.jpg', alt: 'Estação total sobre tripé protegida por guarda-sol em terreno aberto, com veículo ao fundo', caption: 'Levantamento em terreno aberto', placeholder: false },
  { id: 'tripe-terreno-urbano', category: 'terrenos', src: 'images/projects/tripe-terreno-urbano.jpg', alt: 'Equipamento topográfico sobre tripé em terreno urbano, ao lado de um muro', caption: 'Equipamento em terreno urbano', focus: '58% 50%', placeholder: false },
  { id: 'estacao-total-patio', category: 'equipamentos', src: 'images/projects/estacao-total-patio.jpg', alt: 'Estação total sobre tripé em pátio pavimentado, com caminhões ao fundo', caption: 'Estação total em campo', focus: '50% 50%', placeholder: false },
  { id: 'equipamento-posicionamento', category: 'equipamentos', src: 'images/projects/equipamento-posicionamento.jpg', alt: 'Equipamento de posicionamento sobre tripé em área aberta, com maletas amarelas no chão', caption: 'Equipamento de posicionamento', focus: '50% 30%', placeholder: false },
  { id: 'tubulacao-area-industrial', category: 'obras', src: 'images/projects/tubulacao-area-industrial.jpg', alt: 'Tubulação sobre suportes azuis ao longo de gramado, em área industrial', caption: 'Área industrial', focus: '50% 30%', placeholder: false },
  { id: 'estacao-total-ambiente-interno', category: 'obras', src: 'images/projects/estacao-total-ambiente-interno.jpg', alt: 'Estação total sobre tripé em ambiente industrial interno, com estruturas metálicas ao fundo', caption: 'Medição em ambiente interno', focus: '50% 38%', placeholder: false },
  { id: 'tripe-patio', category: 'equipamentos', src: 'images/projects/tripe-patio.jpg', alt: 'Estação total sobre tripé de alumínio em pátio pavimentado, com árvores e caminhões ao fundo', caption: 'Estação total sobre tripé', focus: '50% 14%', placeholder: false },
  { id: 'estacao-total-movimentacao-terra', category: 'obras', src: 'images/projects/estacao-total-movimentacao-terra.jpg', alt: 'Estação total sobre tripé em área de movimentação de terra, com caminhões ao fundo e profissional trabalhando ao lado', caption: 'Estação total em área de movimentação de terra', focus: '25% 50%', placeholder: false },
  { id: 'estacao-total-ambiente-industrial', category: 'obras', src: 'images/projects/estacao-total-ambiente-industrial.jpg', alt: 'Estação total sobre tripé em ambiente industrial interno, com equipe de colete laranja ao fundo', caption: 'Estação total em ambiente industrial', focus: '50% 49%', placeholder: false },
  { id: 'estacao-total-campo-aberto', category: 'rural', src: 'images/projects/estacao-total-campo-aberto.jpg', alt: 'Estação total sobre tripé protegida por guarda-sol em área rural, com veículo ao lado', caption: 'Estação total em campo aberto', placeholder: false },
  { id: 'estacao-total-area-rural', category: 'rural', src: 'images/projects/estacao-total-area-rural.jpg', alt: 'Estação total sobre tripé protegida por guarda-sol, em terreno rural com solo vermelho', caption: 'Estação total em área rural', placeholder: false },
  { id: 'estacao-total-estrutura-industrial', category: 'obras', src: 'images/projects/estacao-total-estrutura-industrial.jpg', alt: 'Estação total sobre tripé em estrutura industrial, entre tubulações e andaimes', caption: 'Estação total em estrutura industrial', focus: '50% 40%', placeholder: false },
  { id: 'estacao-total-equipe-campo', category: 'rural', src: 'images/projects/estacao-total-equipe-campo.jpg', alt: 'Estação total sobre tripé em terreno com grama, com equipe trabalhando ao fundo', caption: 'Estação total e equipe em campo', focus: '50% 15%', placeholder: false },
  { id: 'canteiro-de-obras', category: 'obras', src: 'images/projects/canteiro-de-obras.jpg', alt: 'Canteiro de obras com armações de aço, marcação de gabarito e trabalhador ao fundo', caption: 'Canteiro de obras', placeholder: false },
]
