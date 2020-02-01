import { action } from 'typesafe-actions';
import { DailyArticleActionTypes, IDailyArticle } from '@/store/dailyArticle/types';

export const DailyArticleActions = {
  requestDailyArticle: () => action(DailyArticleActionTypes.REQUEST_DAILY_ARTICLE),
  successDailyArticle: (payload: IDailyArticle) => action(DailyArticleActionTypes.SUCCESS_DAILY_ARTICLE, payload),
  failureDailyArticle: () => action(DailyArticleActionTypes.FAILURE_DAILY_ARTICLE),
  requestSaveDailyArticle: (payload: string) => action(DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload),
  successSaveDailyArticle: () => action(DailyArticleActionTypes.SUCCESS_SAVE_DAILY_ARTICLE),
  failureSaveDailyArticle: () => action(DailyArticleActionTypes.FAILURE_SAVE_DAILY_ARTICLE),
  requestEditDailyArticle: () => action(DailyArticleActionTypes.REQUEST_EDIT_DAILY_ARTICLE),
  successEditDailyArticle: () => action(DailyArticleActionTypes.SUCCESS_EDIT_DAILY_ARTICLE),
  failureEditDailyArticle: () => action(DailyArticleActionTypes.FAILURE_EDIT_DAILY_ARTICLE),
}

export default DailyArticleActions;