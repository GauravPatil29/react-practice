import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { RouteInterface } from './types';
import { SearchRoutes } from './pages/Search';

interface TitleProps {
    title: string | undefined;
    children: React.ReactNode;
}

const DocumentTitle = ({ title, children }: TitleProps): JSX.Element => {
    document.title = title || 'React application';
    return <>{children}</>;
};

export const routes: RouteInterface[] = [SearchRoutes];

export const getRoutes = (route: RouteInterface, idx: number): JSX.Element => {
    return (
        <React.Fragment key={idx}>
            <Route
                path={route.path}
                element={
                    <DocumentTitle title={route.title}>
                        <Suspense fallback={<>Loading...</>}>
                            <route.component {...route.props} />
                        </Suspense>
                    </DocumentTitle>
                }
            />
            {route.routes && <Route path={route.path}>{route.routes.map((item, i) => getRoutes(item, i))}</Route>}
        </React.Fragment>
    );
};
