import { takeLatest } from 'redux-saga'
import { fork } from "redux-saga/effects";
import { setPageSaga } from '../site/redux/appSaga';
export default function* rootSaga() {
    yield [
     
     fork(takeLatest, "SET_PAGE", setPageSaga),
     
    ];
}