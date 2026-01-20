import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('feature/main/pages/MainPage/index.tsx'),
    route('catalog', 'feature/catalog/pages/CatalogPage/index.tsx'),
    route('game/:gameId', 'feature/game/pages/GamePage/index.tsx'),
  ]),
] satisfies RouteConfig;