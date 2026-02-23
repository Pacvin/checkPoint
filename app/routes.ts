import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

import { paths } from '~/shared/constants/routing';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route(paths.catalog, 'routes/catalog.tsx'),
    route(`${paths.game}/:gameId`, 'routes/game.tsx'),
  ]),
] satisfies RouteConfig;
