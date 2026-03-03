

## Plano: Responsividade e caixa de pesquisa maior

### Mudanças

**1. Caixa de pesquisa maior (`src/components/HeroSearch.tsx`)**
- Aumentar `max-w-2xl` para `max-w-3xl`
- Aumentar padding do input (`py-4.5` → `py-5 md:py-6`)
- Aumentar o botão de envio (`h-9 w-9` → `h-10 w-10 md:h-11 md:w-11`)
- Aumentar ícone de search e texto

**2. Header responsivo (`src/pages/Index.tsx`)**
- Adicionar menu hamburger para mobile (ícone `Menu` do lucide)
- No mobile, mostrar overlay/drawer com os links de navegação
- Manter logo visível em mobile

**3. Ajustes gerais de responsividade (`src/pages/Index.tsx`)**
- Hero: ajustar paddings para mobile (`pt-12 pb-20` em mobile)
- Seções: reduzir `mt-28` para `mt-16 md:mt-28` em mobile
- Footer: ajustar gaps e padding para mobile
- Exemplo de uso: padding menor em mobile
- Chips: texto menor em mobile se necessário

**4. Cards responsivos**
- `SourceCard`: grid já é responsivo (ok)
- `FeatureCard`: gap menor em mobile (`gap-6 md:gap-10`)

### Arquivos afetados
- `src/components/HeroSearch.tsx`
- `src/pages/Index.tsx`

