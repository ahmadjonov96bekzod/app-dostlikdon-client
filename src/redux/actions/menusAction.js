
import {UPDATE_STATE} from "../types/menusTypes";
import {API_URL, TOKEN_NAME} from "../../tools/constants";
import axios from 'axios';
import {toast} from 'react-toastify';
import {menusReducer} from '../reducers/menusReducer';


export const updateState = (data) =>{
    return{
        type: UPDATE_STATE,
        payload: data
    }
};

export const saveMenu = (event, errors, values) =>{
    axios.post(API_URL + 'menu',values)
        .then((res)=>{
        toast.success(res.message)
        })
};

export const getAllMenus = () =>{
    axios.get(API_URL + 'menu/all')
        .then((res)=>{
        menusReducer(res.data, UPDATE_STATE)
            toast.success(res.message)
        })
}

















