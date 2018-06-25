import { DASHBOARD_REQUEST_TODAY_MATCHES, DASHBOARD_RECEIVE_TODAY_MATCHES } from "./actions";


export default (state, action) =>
{
    switch(action.type) 
    {
        case DASHBOARD_REQUEST_TODAY_MATCHES:
            return {
                ...state,
                isFetchingTodayMatches: true
            }
        case DASHBOARD_RECEIVE_TODAY_MATCHES:
            return {
                ...state,
                isFetchingTodayMatches: false,
                todayMatches: action.list
            }
        default:
            return state || {
                isFetchingTodayMatches: false,
                todayMatches: []
            }
    }
}