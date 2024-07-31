import { combineReducers } from "redux";
import authSlice from "./authSlice";
import usersSlice from "./userSlice";

const reducers = combineReducers({
    auth:authSlice,
    user:usersSlice,
});

export default reducers;