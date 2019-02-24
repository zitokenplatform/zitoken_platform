import { takeLatest } from 'redux-saga'
import { fork } from "redux-saga/effects";
import { clearAlertSaga,getAlertSaga } from '../site/redux/appSaga';
export default function* rootSaga() {
    yield [
     
     fork(takeLatest, "GET_ALERT", getAlertSaga),
     fork(takeLatest, "CLEAR_ALERT", clearAlertSaga),
     
    ];
}