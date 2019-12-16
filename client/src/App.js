import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {InitalAccounts} from "./Actions/Actions"


import './App.css';

function App() {

  const accounts = useSelector(state=>state);
  const dispatch = useDispatch();

  React.useEffect(()=>{
   dispatch(InitalAccounts());
  },[])

  if(accounts.loading===true){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      {console.log(accounts)}
      <h1>Here are my accounts</h1>
      {accounts.accounts.map(nam=>(
        <h1>{nam.name}</h1>
      ))}
      
    </div>
  );
}

export default App;
