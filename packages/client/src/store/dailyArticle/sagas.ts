import { takeEvery, call, put } from 'redux-saga/effects';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import { DailyArticleActions } from '@/store/dailyArticle/actions';
import { saveDailyArticle, getDailyArticle, editDailyArticle } from './api';

function* flowDailyArticle(action: any) {
  try {
    const { payload } = action;
    const { status, data } = yield call(getDailyArticle, payload);
    yield put(DailyArticleActions.successDailyArticle(data));
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
    window.location.href = '/daily/2020/01/31';
    yield put(DailyArticleActions.successSaveDailyArticle());
  } catch (e) {

  }
}

function* flowEditDailyArticle(actions: any) {
  try {
    const { payload } = actions;
    // const { status } = yield call(editDailyArticle, payload);
    // if (status !== 200) {
    //   alert('error');
    // }
    yield call(alert, '수정이 완료되었습니다.');
    yield put(DailyArticleActions.successDailyArticle(payload));
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

function* watchEditDailyArticle() {
  try {
    yield takeEvery(DailyArticleActionTypes.REQUEST_EDIT_DAILY_ARTICLE, flowEditDailyArticle);
  } catch (e) {

  }
}
export default [watchDailyArticle, watchSaveDailyArticle, watchEditDailyArticle];
