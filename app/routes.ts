import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

import { paths } from './constants/routing';

export default [
  layout('routes/layout.tsx', [
    index('feature/main/pages/MainPage/index.tsx'),
    route(paths.catalog, 'feature/catalog/pages/CatalogPage/index.tsx'),
    route(`${paths.game}/:gameId`, 'feature/game/pages/GamePage/index.tsx'),
  ]),
] satisfies RouteConfig;
