import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Route, Path, Link} from 'react-router-dom';


function App() {
  const [data,setData]=useState({});
  const funcSubmit=()=>{ 
    fetch('http://localhost:2020/oracle-con/reg-std',{
      method:'post',
      body: JSON.stringify(data),
      headers:{
        'Content-type':'application/json'
      }
    })
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      console.log(result);
    })
  }
  return (
    <div className="App">
      <p>
            <b>Mail ID :</b><input onChange={(eve)=>setData({...data,'mail':eve.target.value})}/>
          </p>
          <p>
            <b>Password :</b><input onChange={(eve)=>setData({...data,'pass':eve.target.value})}/>
          </p>
          <button className="button" onClick={funcSubmit}>
            <Link to="/show">submit</Link>
          </button>
          <button className="button">
            <Link to="/signup">Sign Up !</Link>
          </button>
    </div>
  );
}

export default App;
