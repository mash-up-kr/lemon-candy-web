import { action } from 'typesafe-actions';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';

export const DailyArticleActions = {
  requestDailyArticle: () => action(DailyArticleActionTypes.REQUEST_DAILY_ARTICLE),
  successDailyArticle: () => action(DailyArticleActionTypes.SUCCESS_DAILY_ARTICLE),
  failureDailyArticle: () => action(DailyArticleActionTypes.FAILURE_DAILY_ARTICLE),
  requestSaveDailyArticle: (payload: string) => action(DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload),
  successSaveDailyArticle: () => action(DailyArticleActionTypes.SUCCESS_SAVE_DAILY_ARTICLE),
  failureSaveDailyArticle: () => action(DailyArticleActionTypes.FAILURE_SAVE_DAILY_ARTICLE),
}

export default DailyArticleActions;