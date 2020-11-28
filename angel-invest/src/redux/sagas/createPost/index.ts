import { takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { SUBMIT_POST_FORM_REQUEST, SUBMIT_POST_FORM_REQUEST_SUCCESS } from '../../actions/createPost/postActions';
import * as CreatePostApi from '../../../services/createPost';


function* submitPostForm(action: any) {
    alert(`Incoming submitpost saga - ${JSON.stringify(action)}`)
    try {
        const data = yield call(CreatePostApi.createPost, action.payload)
        console.log(`Got from backend: ${JSON.stringify(data.data)}`)
        yield put({
            type: SUBMIT_POST_FORM_REQUEST_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        alert(`an error occured saga ${err}`)
    }
}




function* watchPostFormSubmit() {
    yield takeLatest(SUBMIT_POST_FORM_REQUEST, submitPostForm)
}

export { watchPostFormSubmit }