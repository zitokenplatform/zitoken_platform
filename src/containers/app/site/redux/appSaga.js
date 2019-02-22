import { put } from "redux-saga/effects";

export function* setPageSaga(action) {
    yield put({
        type: "GET_PAGE",
        page: action.page
      });
}
