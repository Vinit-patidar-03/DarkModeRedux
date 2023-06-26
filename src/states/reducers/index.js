import { combineReducers } from "redux";
import actionReducers from './actionReducers'

const reducers = combineReducers({Mode:actionReducers})
export default reducers;