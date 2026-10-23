# MB Topografia — Landing page

React + Vite + TypeScript. CSS em arquivos separados, ícones Lucide, sem bibliotecas desnecessárias.

## Como executar

```bash
npm install        # instala as dependências
npm run dev        # desenvolvimento → http://localhost:5173
npm run build      # build de produção (pasta dist/)
npm run preview    # testa o build localmente → http://localhost:4173
```

A pasta `dist/` pode ser enviada para qualquer hospedagem estática (Netlify, Vercel, Cloudflare Pages, Hostinger, etc.).

## Onde editar

Tudo fica em **`src/config/site.ts`**: WhatsApp, Instagram, mensagem inicial, textos, serviços, fotos do hero, galeria e dados de contato.
O número é guardado só uma vez (`5534988060579`) e todos os links são gerados por `whatsappLink()` com `encodeURIComponent`.

## Onde colocar as fotos reais

| Imagem | Pasta / arquivo | O que alterar em `site.ts` |
|---|---|---|
| Logotipo oficial | `public/images/logo/logo.svg` (ou .png) | `logo: 'images/logo/logo.svg'` |
| Fotos do hero (3) | já usam fotos de `public/images/projects/` | lista `heroImages` |
| Fotos do portfólio | `public/images/projects/nome-da-foto.jpg` | no item de `projects`: `src: 'images/projects/nome-da-foto.jpg'`, `placeholder: false`, `alt` e `caption` reais |

As fotos aparecem em dois lugares: no **carrossel** da seção Projetos e na página **Galeria** (`/#/galeria`, link "Galeria" no menu e botão "Ver todas as fotos"). A página Galeria tem filtros por categoria — defina `category` em cada foto (`campo`, `equipamentos`, `terrenos`, `rural` ou `obras`); filtros sem fotos não aparecem.

As 16 fotos atuais estão em `public/images/projects/`. Para ajustar o recorte da miniatura, use `focus` no item (ex.: `focus: '50% 30%'`); a foto ampliada sempre aparece inteira. Dica: fotos em proporção 4:3, JPG/WebP, até ~300 KB.
Só publique fotos de obras de clientes com autorização.

## Pendências — confirmar com o cliente

- [ ] **Serviços definitivos** (a lista atual é provisória; aparece o selo "Lista em validação"). Ao confirmar: editar `services` e definir `servicesConfirmed = true`.
- [ ] **Endereço comercial**: o perfil do Instagram mostra Av. Prefeito Aracely de Paula, Araxá – MG, CEP 38183-200. Está cadastrado mas **oculto** até `address.confirmed = true`.
- [ ] **E-mail** (`email`) — oculto enquanto `null`.
- [ ] **Horário de atendimento** (`hours`) — oculto enquanto `null`.
- [ ] **Mapa** (`mapEmbedUrl`) — só com a localização exata confirmada.
- [ ] **Logotipo oficial** e ajuste da paleta, se necessário.
- [ ] **Autorização de divulgação** das fotos de obras e de pessoas, e conferir a foto do guarda-sol (mostra nome e telefones de outra empresa).
- [ ] **Texto "Sobre"**: revisar o texto institucional.
- [ ] **Domínio**: depois de definido, adicionar `canonical` e `og:image` em `index.html` (há comentários indicando).
- [ ] Ajustar a meta description conforme os serviços confirmados.

## Verificações realizadas

Build de produção sem erros; teste automatizado em 360 px, 768 px e 1280 px (sem rolagem horizontal, sem erros de console, links externos com `target="_blank"` e `rel="noopener noreferrer"`, WhatsApp e Instagram corretos, menu mobile, lightbox por teclado, botão flutuante).
