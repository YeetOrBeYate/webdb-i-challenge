import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {editTheAccount, editTheState} from "../Actions/Actions";

const Card = (props)=>{

    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    
    
    const id = props.id;
    const name = props.name;
    const budget = props.budget;

    const [nameObject, setName] = React.useState({
        name:name
    });
    const [budgetObject,setBudget] = React.useState({
        budget:budget
    });

    const changeName = (e)=>{
        setName({...nameObject, name: e.target.value})
        
    }

    const changeBudget = (e)=>{
        setBudget({...budgetObject, budget: e.target.value})
        
    }

    const toggleName = ()=>{
        document.querySelector(`.EditName-${id}`).classList.toggle("ShowForm")
    }

    const toggleBudget = ()=>{
        document.querySelector(`.EditBudget-${id}`).classList.toggle("ShowForm")
    }

    const sendName = (e)=>{
        e.preventDefault();
        dispatch(editTheAccount(id, nameObject))

         const newState = state.accounts.map(acc=>{
                    if(acc.id === id){
                        return {...acc, name:nameObject.name}
                    }else{
                        return acc;
                    }
                })
        dispatch(editTheState(newState));

    }

    const sendBudget = (e)=>{
        e.preventDefault();
        dispatch(editTheAccount(id, budgetObject))

        const newState = state.accounts.map(acc=>{
            if(acc.id === id){
                return {...acc, budget:budgetObject.budget}
            }else{
                return acc;
            }
        })
    dispatch(editTheState(newState));
    }


    return(
    <div className="Card">
        <div className = 'title'>
            <h2>{name}</h2><div onClick={toggleName}>Edit</div>
        </div>

        <form className = {"Yeet EditName-"+id }>
            <div>
                <label>Name</label>
                <input type="text" value={nameObject.name} onChange={changeName}></input>
            </div>
            <button type="submit" onClick={(e)=>sendName(e)}>Edit Name</button>
        </form>

        <div className = 'title'>
            <h2>{budget}</h2> <div onClick={toggleBudget}>Edit</div>
        </div>
        <form className = {"Yeet EditBudget-"+id}>
            <div>
                <label>Budget</label>
                <input type="text" value={budgetObject.budget} onChange={changeBudget}></input>
            </div>
            <button type="submit" onClick={(e)=>sendBudget(e)}>Edit Budget</button>
        </form>
    </div>);
}

export default Card;