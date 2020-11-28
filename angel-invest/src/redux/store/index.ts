import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export { store, sagaMiddleware }