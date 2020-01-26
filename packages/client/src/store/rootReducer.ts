import { combineReducers } from 'redux';

import pingReducer from '@/store/ping/reducer';
import historyReducer from '@/store/history/reducer';

export const rootReducer = () => combineReducers<any>({
  ping: pingReducer,
  history: historyReducer,
});

export default { rootReducer };
