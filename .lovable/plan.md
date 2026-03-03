

## Plano: Refinar elegância e identidade médica do comEvidências

### Visão geral
Elevar o visual do site para transmitir credibilidade médica e sofisticação, inspirando-se mais fielmente no OpenEvidence — tons mais sóbrios, mais espaço em branco, tipografia refinada, e elementos visuais que remetam ao universo clínico.

### Mudanças planejadas

**1. Paleta e tokens visuais (src/index.css)**
- Refinar as cores para tons mais sóbrios e médicos — fundo levemente warm (off-white), foreground mais suave
- Bordas mais sutis, sombras mais delicadas
- Aumentar espaçamento geral para respiração visual

**2. Header refinado (Index.tsx)**
- Redesenhar o header com navegação mais elegante — botões com estilo mais profissional (outline fino para "Entrar", preenchido para "Criar conta")
- Adicionar links de navegação discretos: "Sobre", "Fontes", "Para médicos"
- Sutil tagline abaixo do logo: "Apoio à decisão clínica baseada em evidências"

**3. Hero section aprimorada (Index.tsx + HeroSearch.tsx)**
- Adicionar subtítulo elegante abaixo do logo com tipografia display
- Melhorar o search bar — placeholder mais descritivo, transição mais suave
- Chips de sugestão com ícones mais refinados e hover states polidos

**4. Seção de fontes aprimorada (SourceCard.tsx)**
- Adicionar ícones específicos para cada fonte (livro, pílula, microscópio, etc.)
- Hover effect mais sutil e elegante com borda primária suave
- Layout mais limpo com melhor hierarquia visual

**5. Seção "Como funciona" (FeatureCard.tsx)**
- Numeração sutil (01, 02, 03) para indicar fluxo sequencial
- Ícones em círculos mais refinados com gradiente sutil
- Conexão visual entre os passos (linha tracejada horizontal no desktop)

**6. Seção de exemplo de uso aprimorada (Index.tsx)**
- Estilizar como um chat real — avatares para médico e IA
- Animação de typing para a resposta da IA
- Tags de fonte com hover tooltip

**7. Nova seção: CTA final (Index.tsx)**
- Bloco de call-to-action antes do footer: "Comece a consultar com evidências"
- Botão grande e elegante com gradiente primário

**8. Footer refinado (Index.tsx)**
- Links para "Termos de uso", "Política de privacidade", "Contato"
- Ícone do comEvidências pequeno no footer
- Disclaimer médico mais proeminente

### Componentes afetados
- `src/index.css` — tokens visuais
- `src/pages/Index.tsx` — layout, header, CTA, footer
- `src/components/HeroSearch.tsx` — refinamento visual
- `src/components/SourceCard.tsx` — ícones e hover
- `src/components/FeatureCard.tsx` — numeração e refinamento

