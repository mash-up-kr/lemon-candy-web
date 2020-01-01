import { takeEvery, call, put } from 'redux-saga/effects';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import { DailyArticleActions } from '@/store/dailyArticle/actions';

function* flowDailyArticle() {
  try {
    yield put(DailyArticleActions.successDailyArticle());
    yield call(console.log, 'flow dailyArticle execute');
  } catch (e) {

  }
}

function* watchDailyArticle() {
  try {
    yield takeEvery(DailyArticleActionTypes.REQUEST_DAILY_ARTICLE, flowDailyArticle);
  } catch (e) {
    
  }
}

export default [watchDailyArticle];