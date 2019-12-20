import React from 'react';
import axios from 'axios';




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

export const editName = (data)=>{
    return{ type: "edit", payload:data}
}

export const editState = (data)=>{
    return{type: "editState", payload: data}
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

export const editTheAccount = (id,object)=>{

    return function(dispatch){

        // dispatch(loadAccounts());

        return axios.put(`http://localhost:4000/accounts/${id}`, object)
        .then(res=>{
            let yate = res.data.account
            console.log('response from put', res);
        // dispatch(editName(yate))            
        })

    }
}

export const editTheState = (array)=>{

    return function(dispatch){

        dispatch(editState(array));
    }
}

