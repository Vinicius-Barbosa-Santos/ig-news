## Objetivo
Integrar os componentes exportados do Figma ("Home" e "Frame 1") na página inicial, mantendo o Pages Router e garantindo que imagens e estilos funcionem corretamente em Next.js 16.

## Situação Atual
- Componentes Figma localizados em `.figma/1_3/index.jsx` (Home) e `.figma/71_0/index.jsx` (Frame 1), com `.module.scss` correspondentes.
- Imagens referenciadas via caminhos relativos `../image/...` dentro de `.figma`, que não são servidos pelo Next.
- Projeto em TypeScript com Pages Router (`src/pages`).

## Plano Técnico
1. **Mover assets para `public`**
   - Copiar todas as imagens usadas pelos componentes Figma para `public/figma/...`.
   - Padrão de referência depois: `src="/figma/<arquivo>"`.

2. **Criar componentes React em `src/components/figma`**
   - `src/components/figma/Home.tsx`: adaptar `.figma/1_3/index.jsx` para TypeScript e atualizar os `src` das imagens para `/figma/...`.
   - `src/components/figma/Frame1.tsx`: adaptar `.figma/71_0/index.jsx` para TypeScript e atualizar o `src`.
   - Importar os respectivos `.module.scss` originais (SCSS module funciona nativamente com Next).

3. **Uso de imagens**
   - Para PNG: usar `next/image` com `src` de `public` para otimização.
   - Para SVG: podemos manter `<img>` simples ou usar `next/image` (ambos suportados com arquivos em `public`).

4. **Inserir na Home**
   - Substituir o conteúdo atual de `src/pages/index.tsx` por `<HomeFigma />` ou compor com o conteúdo existente.
   - Exemplo de uso:
   ```tsx
   import HomeFigma from "@/components/figma/Home";
   export default function Home() {
     return <HomeFigma />;
   }
   ```

5. **Usar o Frame 1 onde necessário**
   - Importar e renderizar o ícone em locais como header ou hero.
   - Exemplo:
   ```tsx
   import Frame1 from "@/components/figma/Frame1";
   // dentro do JSX
   <Frame1 />
   ```

6. **Ajustes de estilo (se necessário)**
   - Inicialmente manter os estilos de `.module.scss` para fidelidade visual.
   - Em seguida, avaliar remoção de larguras fixas (ex.: `width: 1440px`) para responsividade, migrando gradualmente para Tailwind se desejado.

7. **Verificação**
   - Rodar `pnpm dev` e validar que:
     - A página `/` renderiza o layout do Figma.
     - As imagens carregam a partir de `public` sem 404.
     - Lint e compilação passam sem avisos críticos.

## Entregáveis
- `src/components/figma/Home.tsx` e `Frame1.tsx` funcionais.
- Imagens em `public/figma` com referências atualizadas.
- `src/pages/index.tsx` renderizando os componentes Figma.

## Observações
- Mantemos Pages Router; não movemos nada para `src/app`.
- Se preferir, podemos integrar com o botão existente e navegação `/posts` que você já criou.

Confirma aplicar o plano e executar as alterações?