import { takeLatest } from 'redux-saga'
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
    yield [
     
     //fork(takeLatest, "SET_PAGE", setPageSaga),
     
    ];
}