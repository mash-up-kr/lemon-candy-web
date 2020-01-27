import { takeEvery, call, put } from 'redux-saga/effects';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import { DailyArticleActions } from '@/store/dailyArticle/actions';
import { saveDailyArticle } from './api';

function* flowDailyArticle() {
  try {
    yield put(DailyArticleActions.successDailyArticle());
    yield call(console.log, 'flow dailyArticle execute');
  } catch (e) {

  }
}

function* flowSaveDailyArticle(data: any) {
  try {
    const SaveDailyArticle = yield call(saveDailyArticle, data);
    console.log(SaveDailyArticle);
  } catch (e) {

  }
}

function* watchDailyArticle() {
  try {
    yield takeEvery(DailyArticleActionTypes.REQUEST_DAILY_ARTICLE, flowDailyArticle);
  } catch (e) {

  }
}

function* watchSaveDailyArticle() {
  try {
    yield takeEvery(DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, flowSaveDailyArticle);
  } catch (e) {

  }
}

export default [watchDailyArticle, watchSaveDailyArticle];
