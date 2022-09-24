import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import modalReducer from "./modalReducer";

export default combineReducers({ modal: modalReducer, users: usersReducer });
