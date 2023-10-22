export enum AppRoutes {
  MAIN = 'main',
  USER_EDIT = 'user_edit',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteUserEdit = (id: string) => `/user/${id}`;
