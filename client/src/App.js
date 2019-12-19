import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {InitalAccounts} from "./Actions/Actions"
import Card from './Components/Card';

import './App.css';

function App() {

  const state = useSelector(state=>state);
  const dispatch = useDispatch();

  //basically using this for component did mount
  React.useEffect(()=>{
   dispatch(InitalAccounts());
  },[])

  
  if(state.loading===true){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <div className="App">
      {console.log(state)}
      <h1>Here are my accounts</h1>
      {state.accounts.map((nam)=>(
        <div>
          <Card name={nam.name} budget = {nam.budget} id = {nam.id}/>
        </div>
        ))}
    </div>
  );
}


export default App;
