import { put } from "redux-saga/effects";
export function* authUser(action) {
  try{
    
    
  }catch (error) {
    yield put({
      type: "GET_ALERT_REDUCER",
      msn: {
        type:"E",
        messenger:"Erro Aplication!",
        active:true,
      },
    });
  }
}