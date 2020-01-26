import { action } from 'typesafe-actions';

import { ACTION_TYPES } from '@/store/_types/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createAsyncAction = <T>(typePrefix: ACTION_TYPES) => {
  const REQUEST = `${typePrefix}/REQUEST`;
  const SUCCESS = `${typePrefix}/SUCCESS`;
  const FAILURE = `${typePrefix}/FAILURE`;

  return {
    request: (payload = {}) => action(REQUEST, payload),
    success: (payload = {}) => action(SUCCESS, payload),
    failure: (error?: Error) => action(FAILURE, error),
  };
};
