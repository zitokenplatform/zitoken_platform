import { takeLatest } from 'redux-saga'
import { fork } from "redux-saga/effects";
import { setPageSaga,setAlertSaga  } from '../site/redux/appSaga';

export default function* rootSaga() {
    yield [     
     fork(takeLatest, "SET_PAGE", setPageSaga),
     fork(takeLatest, "SET_ALERT", setAlertSaga),
    ];
}