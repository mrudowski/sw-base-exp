import {ROUTES} from '@/router/ROUTES.ts';

import {RouteId} from './types.ts';

export const getIdFromUrl = (url: string) => {
  return url.split('/').at(-1) as string;
};

export const getThingRoute = (route: RouteId, id: string) => `/${route}/${id}`;
export const getCharacterRoute = (id: string) => getThingRoute(ROUTES.characters, id);
export const getPlanetRoute = (id: string) => getThingRoute(ROUTES.planets, id);
export const getVehicleRoute = (id: string) => getThingRoute(ROUTES.vehicles, id);
