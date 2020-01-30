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

function* flowSaveDailyArticle(actions: any) {
  try {
    const { payload } = actions;
    const { status } = yield call(saveDailyArticle, payload);
    if (status !== 200) {
      alert('error');
    }
    yield call(alert, '작성이 완료되었습니다.');
    yield put(DailyArticleActions.successSaveDailyArticle());
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
