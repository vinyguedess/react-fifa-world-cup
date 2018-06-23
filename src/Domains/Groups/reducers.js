import { GROUPS_REQUEST, GROUPS_RECEIVE } from "./actions";


export default (state, action) => {
    switch(action.type) {
        case GROUPS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case GROUPS_RECEIVE:
            return {
                ...state,
                isFetching: false,
                list: action.list
            }
        default:
            return state || {
                isFetching: false,
                list: []
            }
    }
}