import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';

import { routes, getRoutes } from './Routes';

import './index.scss';

const { PUBLIC_URL } = process.env || { PUBLIC_URL: '' };

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>{routes.map((route, idx) => getRoutes(route, idx))}</Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
