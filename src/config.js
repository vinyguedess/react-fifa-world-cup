import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import groups from "./Domains/Groups/reducers";


const reducers = combineReducers({
    groups
});


const loggerMiddleware = createLogger();
export default createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));