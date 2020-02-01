import { HomeActionTypes } from "@/store/home/types";
import { takeEvery, call } from 'redux-saga/effects';
import HomeActions from "./actions";
import { getHome } from "./api";

function* flowHome(actions: any) {
  try {
    yield call(getHome);
  } catch (e) {

  }
}

function* watchHome(action: any) {
  try {
    yield takeEvery(HomeActionTypes.REQUEST_HOME, flowHome);
  } catch (e) {
    
  }
}

export default [watchHome];
