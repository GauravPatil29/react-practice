interface RouteInterface {
    path: string;
    navId: string;
    title?: string;
    component: React.FC;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any;
    routes?: RouteInterface[];
}

export type { RouteInterface };
