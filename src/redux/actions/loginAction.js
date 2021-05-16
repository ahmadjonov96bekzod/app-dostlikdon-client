
import axios from 'axios'
import {API_URL, TOKEN_NAME} from "../../tools/constants";


export  const signIn = (event, value) =>{

    axios.post(API_URL + "auth/login", value)
        .then((res)=>{
            localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken)
        })

}