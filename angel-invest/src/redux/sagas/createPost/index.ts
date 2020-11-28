import { call, put, takeLatest } from 'redux-saga/effects'
import { SUBMIT_POST_FORM_REQUEST, SUBMIT_POST_FORM_REQUEST_SUCCESS, SUBMIT_POST_FORM_REQUEST_FAILURE } from '../../actions/createPost/postActions';
import * as CreatePostApi from '../../../services/createPost';
import Alert from '../../../components/Alert'

function* submitPostForm(action: any) {
    console.log(`Incoming submitpost saga - ${JSON.stringify(action)}`)
    try {
        const response = yield call(CreatePostApi.createPost, action.payload)
        console.log(`Got from backend: ${JSON.stringify(response.data)}`)

        // Error send from the backend.
        if (response.data.message) {
            response.data.detail.includes('(name)') && Alert(response.severity, "Please enter another name for your project")
            yield put({
                type: SUBMIT_POST_FORM_REQUEST_FAILURE,
                payload: response.data.detail
            })
        } else {
            yield put({
                type: SUBMIT_POST_FORM_REQUEST_SUCCESS,
                payload: response.data
            })
        }

        //Error fron the frontend (database connection, network error.) 
    } catch (err) {
        Alert(err.title, err.message)
        yield put({
            type: SUBMIT_POST_FORM_REQUEST_FAILURE,
            payload: err.message
        })
    }
}




function* watchPostFormSubmit() {
    yield takeLatest(SUBMIT_POST_FORM_REQUEST, submitPostForm)
}

export { watchPostFormSubmit }