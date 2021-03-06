import produce from 'immer';

import { DailyArticleActionTypes } from '@/store/dailyArticle/types';

const initialState = {
  currentArticle: {}
};

const successDailyArticle = (state: any, draft: any) => {
  console.log(state);
  draft.currentArticle = state.payload
};

export default function dailyArticleReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case DailyArticleActionTypes.SUCCESS_DAILY_ARTICLE:
        return successDailyArticle(action, draft);
      default:
        return state;
    }
  });
}
