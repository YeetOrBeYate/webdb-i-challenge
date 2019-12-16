import React from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux"



//These strictly tell the reducer what to do, the axios calls are where the magiv happens. These will be used in them
export const got = (data)=>{
    return{type: "got", payload:data}
}

export const addAccount = (data)=>{
    return {type: "add", payload: data}
}

export const loadAccounts = ()=>{
    return { type: "loading"}
}


export const InitalAccounts = ()=>{

    return function(dispatch){

        
        dispatch(loadAccounts());
        
        return axios.get("http://localhost:4000/accounts")
        .then((res)=>{
            let yeet = res.data.accs
            dispatch(got(yeet))
            console.log("from action", yeet)
        })
    }
}

