import React from 'react';

import { RouteInterface } from 'src/types';

const SearchRoutes: RouteInterface = {
    path: 'search',
    navId: 'search',
    title: 'Search',
    component: React.lazy(() => import('./Search'))
};

export { SearchRoutes };
