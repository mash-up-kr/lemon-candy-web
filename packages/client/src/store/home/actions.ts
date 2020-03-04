import { action } from 'typesafe-actions';
import { HomeActionTypes } from './types';

export const HomeActions = {
  requestHome: () => action(HomeActionTypes.REQUEST_HOME),
  successHome: () => action(HomeActionTypes.SUCCESS_HOME),
  failureHome: () => action(HomeActionTypes.FAILURE_HOME),
};

export default HomeActions;