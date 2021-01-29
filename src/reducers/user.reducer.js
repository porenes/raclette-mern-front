import { GET_USER } from "../actions/user.actions";

const initialState = {

}

const userReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_USER:
        return payload

    default:
        return state
    }
}

export default userReducer