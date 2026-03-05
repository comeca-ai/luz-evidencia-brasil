

## Plano: Redesenhar seção de Fontes no estilo OpenEvidence

### Referência
Na imagem do OpenEvidence, as fontes são apresentadas em um grid 2x2 com:
- Cards grandes e limpos, centrados
- Ícone/logo grande no topo de cada card
- Nome da fonte em destaque
- Descrição curta abaixo, centralizada
- Muito espaço em branco, sem bordas pesadas
- Layout que transmite autoridade e confiança

### Mudanças

**1. Redesenhar `SourceCard.tsx`**
- Layout vertical centralizado (ícone grande no topo, título, descrição)
- Ícone maior (h-12 w-12) dentro de um círculo colorido
- Texto centralizado
- Card mais alto, com mais padding (p-8 md:p-10)
- Bordas mais sutis, hover mais elegante
- Remover o contador ("~500 docs") — ou torná-lo muito discreto

**2. Atualizar grid na seção de fontes (`Index.tsx`)**
- Mudar de 3 colunas para 2 colunas no desktop (`lg:grid-cols-2`)
- Cards maiores com mais respiração
- Aumentar gap entre cards

**3. Refinar o section-divider**
- Título da seção mais imponente, como "Fontes abertas brasileiras" no estilo do OpenEvidence ("The leading medical information platform")

### Arquivos afetados
- `src/components/SourceCard.tsx`
- `src/pages/Index.tsx`

