import React from 'react'

const account={
    loading:false,
    accounts:[]
}

export const AccountReducer = (state = account, action)=>{
   switch(action.type){
    case 'loading':
        return {...state, loading:true}
    case 'add':
        return {...state, accounts: action.payload, loading: false}
    case "got":
        return {...state, accounts: action.payload, loading:false}
    default:
        return state
   }
}