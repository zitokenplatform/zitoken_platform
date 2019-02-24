import { put } from "redux-saga/effects";


export function* getAlertSaga() {
  console.log("ESSSS");
  yield put({
    type: "GET_ALERT_REDUCER",
    msn: {
      type:"I",
      messenger:"OI",
      active:true,
    },
  });
}

export function* clearAlertSaga() {
  yield put({
    type: "GET_ALERT_REDUCER",
    msn: {
      type:undefined,
      messenger:undefined,
      active:false,
    },
  });
}
