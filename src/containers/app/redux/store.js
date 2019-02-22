import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga"
import site from "../site/redux/appReducer";
const sagaMiddleware = new createSagaMiddleware();
const Store = createStore(
    combineReducers({ site }),

    applyMiddleware(sagaMiddleware)
  );
  
  sagaMiddleware.run(rootSaga);
  
  window.store = Store;
  
  export default Store;