import { connect } from "react-redux";
import GroupsList from "./components/GroupsList";
import { fetchGroups } from "./actions";


const mapStateToProps = ({ groups }) =>
{
    return {
        groups: groups.list
    }
}


const mapDispatchToProps = dispatch =>
{
    dispatch(fetchGroups());
    return {
        fetchGroupsList()
        {
            dispatch(fetchGroups());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);