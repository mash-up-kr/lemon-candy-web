import { createAsyncAction } from '@/store/_modules/actionUtils';
import { ACTION_TYPES, HttpStatusCode } from '@/store/_types/actionTypes';
import produce from 'immer';

export const HISTORY_PREFIX = ACTION_TYPES.HISTORY;
export const historyAction = createAsyncAction<number>(HISTORY_PREFIX);

export interface HistoryState {
  data: any; // History Entity
  requestState: HttpStatusCode;
}

const MOCK_DATA = {
  remind: false,
  year: [],
};

const initState: HistoryState = {
  data: null as any,
  requestState: HttpStatusCode.LOADING,
};

export default function historyReducer(state = initState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case historyAction.SUCCESS:
        return {
          data: MOCK_DATA,
          requestState: HttpStatusCode.OK,
        };
      case historyAction.FAILURE:
        return {
          data: {},
          requestState: HttpStatusCode.UNKNOWN,
        };
      default:
        return state;
    }
  });
}
