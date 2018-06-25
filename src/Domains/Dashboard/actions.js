import Axios from "axios";


export const fetchTodayMatches = () => dispatch =>
{
    dispatch(dashboardRequestTodayMatches());
    return Axios.get("https://worldcup.sfg.io/matches/today")
        .then(({ data }) => dispatch(dashboardReceiveTodayMatches(data)));
}


export const DASHBOARD_REQUEST_TODAY_MATCHES = "DASHBOARD:REQUEST_TODAY_MATCHES";
const dashboardRequestTodayMatches = () => ({ type: DASHBOARD_REQUEST_TODAY_MATCHES });


export const DASHBOARD_RECEIVE_TODAY_MATCHES = "DASHBOARD:RECEIVE_TODAY_MATCHES";
const dashboardReceiveTodayMatches = list => ({
    type: DASHBOARD_RECEIVE_TODAY_MATCHES,
    list
});