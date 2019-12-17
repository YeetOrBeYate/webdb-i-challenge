import React from 'react';

const Card = (props)=>{

    const [name, setName] = React.useState("");
    const [budget,setBudget] = React.useState("");

    return(
    <div className="Card">
        <h2>{props.name}</h2>
        <form className = "EditName">
            <div>
                <label>Name</label>
                <input type="text" value={name}></input>
            </div>
            <button type="submit" >Edit Name</button>
        </form>
        <p>{props.budget}</p>
        <form className = "EditBudget">
            <div>
                <label>Budget</label>
                <input type="text" value={budget}></input>
            </div>
            <button type="submit" >Edit Budget</button>
        </form>
    </div>);
}

export default Card;