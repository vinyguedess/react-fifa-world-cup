import Axios from "axios";


export const fetchGroups = () => dispatch =>
{
    dispatch(groupsRequest());
    return Axios.get("https://worldcup.sfg.io/teams/group_results")
        .then(({ data }) => dispatch(groupsReceive(data.map(({ group }) => ({
            name: group.letter,
            teams: group.teams.map(({ team }) => team)
        })))));
}


export const GROUPS_REQUEST = "GROUPS:REQUEST";
const groupsRequest = () => ({ type: GROUPS_REQUEST });


export const GROUPS_RECEIVE = "GROUPS:RECEIVE";
const groupsReceive = list => ({ type: GROUPS_RECEIVE, list });