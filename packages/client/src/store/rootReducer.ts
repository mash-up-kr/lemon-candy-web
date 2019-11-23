import pingReducer from './ping/reducer';
import { combineReducers } from 'redux';

export const rootReducer = () => {
  return combineReducers<any>({
    ping: pingReducer
  })
};
