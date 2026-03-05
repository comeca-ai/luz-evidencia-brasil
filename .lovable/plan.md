

## Plano: Tela pós-login com sidebar estilo OpenEvidence

### Visão geral
Criar uma nova página `/dashboard` que aparece após o login, com layout de sidebar à esquerda (igual ao OpenEvidence) + área central com barra de pesquisa e chips de sugestão. Manter cores, fontes e identidade visual do comEvidências.

### Mudanças

**1. Criar `src/pages/Dashboard.tsx`**
- Layout com `SidebarProvider` + `Sidebar` (componente shadcn já existente)
- Sidebar esquerda contendo:
  - Botão "Nova conversa" no topo (ícone + texto)
  - Link "Coleções"
  - Seção "Favoritos" com chevron toggle e texto "Adicione perguntas aos favoritos..."
  - Seção "Conversas" com chevron toggle, link "Ver todas", e texto "Nenhuma conversa recente..."
  - No rodapé da sidebar: avatar do usuário (iniciais), nome/email, menu com "Settings" e "Sair"
- Área principal: logo do comEvidências centralizado, barra de pesquisa (HeroSearch), chips de sugestão — reutilizando componentes existentes

**2. Atualizar `src/App.tsx`**
- Adicionar rota `/dashboard`

**3. Atualizar `src/pages/Login.tsx`**
- Redirecionar para `/dashboard` ao clicar em "Entrar" (navigate)

### Componentes reutilizados
- `SidebarProvider`, `Sidebar`, `SidebarContent`, `SidebarHeader`, `SidebarFooter`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton` (já existem em `ui/sidebar.tsx`)
- `HeroSearch` para a barra de pesquisa central
- `DropdownMenu` para o menu do usuário no rodapé

### Arquivos afetados
- `src/pages/Dashboard.tsx` (novo)
- `src/App.tsx` (nova rota)
- `src/pages/Login.tsx` (redirect)

