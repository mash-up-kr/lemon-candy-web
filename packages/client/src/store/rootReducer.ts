import { combineReducers } from 'redux';

import pingReducer from '@/store/ping/reducer';
import dailyArticleReducer from '@/store/dailyArticle/reducer';

export const rootReducer = () => combineReducers<any>({
  ping: pingReducer,
  dailyArticle: dailyArticleReducer
});

export default { rootReducer };
