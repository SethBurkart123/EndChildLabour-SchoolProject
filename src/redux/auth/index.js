import { authActionTypes } from "./auth.types"

const initialState = {
    currentUser: { id: 'default', name: 'Guest' },
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: { id: 'default', name: 'Guest' },
                loading: false,
                error: null
            }
        default:
            return state
    }
}

export default authReducer
