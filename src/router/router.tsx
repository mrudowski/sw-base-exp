import '../styles/index.scss';

import {QueryClient} from '@tanstack/react-query';
import {createBrowserRouter, Navigate} from 'react-router-dom';

import Character from '../routes/character/Character.tsx';
import Characters from '../routes/characters/Characters.tsx';
import ErrorPage from '../routes/ErrorPage.tsx';
import Layout from '../routes/layout/Layout.tsx';
import {SW_API_URLS} from '../services/swApi/constants.ts';
import {listLoader, thingLoader} from '../services/swApi/loaders/loaders.ts';
import {DEFAULT_ROUTE, DETAILS_ROUTES, ROUTES} from './ROUTES.ts';

const getRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Navigate to={DEFAULT_ROUTE} replace={true} />,
            },
            {
              path: ROUTES.characters,
              element: <Characters />,
              loader: listLoader(queryClient, SW_API_URLS.characters),
            },
            {
              path: DETAILS_ROUTES.character,
              element: <Character />,
              loader: thingLoader(queryClient, SW_API_URLS.characters),
            },
            {
              path: '*',
              element: <ErrorPage />,
            },
          ],
        },
      ],
    },
  ]);

export default getRouter;
