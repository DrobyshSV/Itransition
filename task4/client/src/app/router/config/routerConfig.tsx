import {RouteProps} from 'react-router-dom';
import {MainPage} from 'src/pages/MainPage';
import {UserEditPage} from 'src/pages/UserEditPage';
import {NotFoundPage} from 'src/pages/NotFoundPage';
import {AppRoutes, getRouteMain, getRouteUserEdit} from '../../../shared/consts/router';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage/>,
  },
  [AppRoutes.USER_EDIT]: {
    path: getRouteUserEdit(':id'),
    element: <UserEditPage/>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage/>,
  },
};
