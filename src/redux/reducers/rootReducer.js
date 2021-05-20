import {LoginReducer} from "./LoginReducer";
import {combineReducers} from "redux";
import {menusReducer} from "./menusReducer";


export const rootReducer = combineReducers({
    login: LoginReducer,
    menus : menusReducer
})

