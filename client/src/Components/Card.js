import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {editTheName} from "../Actions/Actions";

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
        dispatch(editTheName(id, nameObject))
        console.log("from the card",state.accounts)

         state.accounts = state.accounts.map(acc=>{
                    if(acc.id === id){
                        return {...acc, name:nameObject.name}
                    }else{
                        return acc;
                    }
                })
        console.log("from after the thing", state.accounts)

    }

    return(
    <div className="Card">
        <div className = 'title'>
            <h2>{props.name}</h2><div onClick={toggleName}>Edit</div>
        </div>

        <form className = {"Yeet EditName-"+id }>
            <div>
                <label>Name</label>
                <input type="text" value={nameObject.name} onChange={changeName}></input>
            </div>
            <button type="submit" onClick={(e)=>sendName(e)}>Edit Name</button>
        </form>

        <div className = 'title'>
            <h2>{props.budget}</h2> <div onClick={toggleBudget}>Edit</div>
        </div>
        <form className = {"Yeet EditBudget-"+id}>
            <div>
                <label>Budget</label>
                <input type="text" value={budgetObject.budget} onChange={changeBudget}></input>
            </div>
            <button type="submit">Edit Budget</button>
        </form>
    </div>);
}

export default Card;