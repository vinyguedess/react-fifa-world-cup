import { connect } from "react-redux";
import Dashboard from "./components/Dashboard";
import { fetchTodayMatches } from "./actions";


const mapStateToProps = ({ dashboard }) => ({
    isFetchingMatches: dashboard.isFetchingMatches,
    todayMatches: dashboard.todayMatches
});


const mapDispatchToProps = dispatch => 
{
    dispatch(fetchTodayMatches());
    return {
        fetchTodayMatchesList()
        {
            dispatch(fetchTodayMatches());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);