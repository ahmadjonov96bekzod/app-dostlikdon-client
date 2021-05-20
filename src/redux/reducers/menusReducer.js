import {UPDATE_STATE, SAVE_MENU} from "../types/menusTypes";
import  axios from 'axios';

const initialState = {
    modalOpen : false,
    menus:[]
}

export const menusReducer = (state = initialState, action) =>{

    if(action.type === UPDATE_STATE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}

export const saveMenu = (state = initialState, action) =>{
    if (action.type === SAVE_MENU){
        axios.post("https://app-dostlik.herokuapp.com/api/menu")
            .then((res)=>{

            })
    }
}