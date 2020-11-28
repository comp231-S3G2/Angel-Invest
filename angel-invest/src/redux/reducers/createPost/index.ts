import { SUBMIT_POST_FORM_REQUEST_SUCCESS, SUBMIT_POST_FORM_REQUEST, SUBMIT_POST_FORM_REQUEST_FAILURE } from '../../actions/createPost/postActions'


interface PostState {
    user: {}//Bearer Token,
    error: string | undefined,
    formData: FormData

}

const initialState: any = {
    user: {},
    error: undefined,
    formData: {
        postData: {},
        token: null
    }
}


const PostReducer = (state: PostState = initialState, action: { type: string, payload: any }) => {

    switch (action.type) {
        case SUBMIT_POST_FORM_REQUEST:
            return {
                ...state,
                formData: action.payload
            }

        case SUBMIT_POST_FORM_REQUEST_SUCCESS:
            alert('Succeded')
            return {
                ...state,
                formData: action.payload
            }
        case SUBMIT_POST_FORM_REQUEST_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state


    }
}

export { PostReducer }