import { LIST_POSTS } from "../actions/post.actions";

const initialState = {

}

const postsReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case LIST_POSTS:
        return payload

    default:
        return state
    }
}

export default postsReducer