import { put } from "redux-saga/effects";

export function* setPageSaga(action) {
    yield put({
        type: "GET_PAGE",
        page: action.page
      });
}
export function* setAlertSaga(action) {
  yield put({
      type: "GET_ALERT_REDUCER",
      msn: action.alert
    });
}
