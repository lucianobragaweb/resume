# Checklist de Refatoração (Projeto React)

Objetivo: melhorar arquitetura, manutenção e boas práticas sem alterar comportamento nem visual.

## Baseline
- [ ] Confirmar entrypoints atuais: `src/index.js`, `src/App.js`, `public/index.html`
- [ ] Confirmar rota efetiva: `App` renderiza `pages/resume`
- [ ] Registrar componentes não usados/experimental: `components/*` diversos
- [ ] Registrar dependências e scripts relevantes (CRA + rewired + Tailwind + i18n)

## Quick Wins
- [x] Corrigir atributos JSX inválidos em SVG (warnings)
- [x] Reduzir duplicação óbvia em `Timeline` mantendo DOM
- [x] Ajustar teste padrão do CRA para refletir app real
- [x] Remover arquivo placeholder `routes.js`
- [x] Remover componentes usados apenas em `pages/testes`
- [x] Substituir SVGs por `lucide-react` e bandeiras por `react-country-flag`
- [x] Desabilitar sourcemaps em produção para evitar erro do build (`.env.production`)
- [x] Padronizar imports e adicionar `data-testid` em pontos-chave
- [x] Implementar rotas por idioma (`/br`, `/en`) com `react-router-dom`

## Refatoração por Módulo (Resume)
- [x] Centralizar dados estáticos (contatos, awards, skills) em um único módulo de conteúdo
- [x] Refatorar `Timeline` para data-driven (já feito na etapa anterior)
- [x] Simplificar `Sidebar` para consumir dados do módulo
- [x] Estruturar conteúdo do resume em módulos (`src/content/*`)
- [x] Mover componentes específicos para `src/features/resume/components`

## DX e Padronização
- [x] Adicionar `jsconfig.json` para aliases
- [x] Documentar convenções de pasta e boundaries (README do `react-app`)

## Verificação de Equivalência
- [ ] Comparar renderização do `Resume` (snapshot/manual)
- [ ] Verificar alternância de idiomas
- [ ] Verificar modo print
