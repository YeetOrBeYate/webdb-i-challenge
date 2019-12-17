import React from 'react';

const Card = (props)=>{

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
        console.log(nameObject);
    }

    const changeBudget = (e)=>{
        setBudget({...budgetObject, budget: e.target.value})
        console.log(budgetObject);
    }

    const toggleName = ()=>{
        document.querySelector(`.EditName-${id}`).classList.toggle("ShowForm")
    }

    const toggleBudget = ()=>{
        document.querySelector(`.EditBudget-${id}`).classList.toggle("ShowForm")
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
            <button type="submit">Edit Name</button>
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