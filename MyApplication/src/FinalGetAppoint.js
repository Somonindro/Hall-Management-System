import './FinalGetAppoint.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function FinalGetAppoint (){
    const location = useLocation();
    const {from} = location.state;
    const [des, setdes] = useState({'des':from[2]});


    const funcDone=()=>{ 
      fetch('http://localhost:2020/oracle-con/reg-std-finalgetappoint',{
      method:'post',
      body: JSON.stringify(des),
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
    <div className="getappoint">
      <h1>APPOINTMENT</h1>
      <h3>O MAIL ID: {from[0]}</h3>
      <h3>E MAIL ID  : {from[1]}</h3>
      <h3>DESCRIPTION : {from[2]}</h3>
      <h3>S MAIL ID : {from[3]}</h3>
      <h3>ROOM: {from[4]}</h3>
      <h3>HALL NAME : {from[5]}</h3>
      <button onClick={funcDone}>
      <Link to="/emfirstpage" className='emlink'>Done</Link>
          </button>
    </div>
  );
}

export default FinalGetAppoint;