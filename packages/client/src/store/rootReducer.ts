import { combineReducers } from 'redux';

import pingReducer from '@/store/ping/reducer';

export const rootReducer = () => combineReducers<any>({
  ping: pingReducer,
});

export default { rootReducer };
