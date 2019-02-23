import { put } from "redux-saga/effects";

export function* setPageSaga(action) {
    localStorage.setItem("page", JSON.stringify(action.page));
}
export function* getPageSaga() {
    let page = JSON.parse(localStorage.getItem("page"));
    console.log("0----"+ page);
    if(page === undefined || page ===null){
      page = 1;
    }
    yield put({
      type: "GET_PAGE",
      page: page
    });
}