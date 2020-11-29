import { watchPostFormSubmit } from './createPost'
import { fork } from 'redux-saga/effects';

function* rootSaga() {

    yield fork(watchPostFormSubmit)
}

export default rootSaga