import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga"

const sagaMiddleware = new createSagaMiddleware();
const Store = createStore(
    combineReducers({ }),

    applyMiddleware(sagaMiddleware)
  );
  
  sagaMiddleware.run(rootSaga);
  
  window.store = Store;
  
  export default Store;