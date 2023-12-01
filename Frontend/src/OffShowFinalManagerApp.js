import './OffShowFinalRoomApp.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function OffShowFinalManagerApp (){
    const location = useLocation();
    const {from} = location.state;
    const [data,setData]=useState({'mail':from[0] , 'month':from[2]});


    const funcApprove=()=>{ 
      
      fetch('http://localhost:2020/oracle-con/reg-std-offshowfinalmanagerappyes',{
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

    const funcReject=()=>{ 
      
        fetch('http://localhost:2020/oracle-con/reg-std-offshowfinalmanagerappno',{
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
    <div className="offshowfinalapp">
      <h1>Mess Manager Application </h1>
      <h3>Mail ID   : {from[0]}</h3>
      <h3>Student ID   : {from[1]}</h3>
      <h3>Mess Month  : {from[2]}</h3>
      <h3>Status      : {from[3]}</h3>
      <h3>Time and Date: {from[4]}</h3>
      

      <p>Do you want to approve it?</p>

      <button onClick={funcApprove}>
      <Link to="/officialfirst" className='showwlink'>YES</Link>
          </button>
      <button onClick={funcReject}>
      <Link to="/officialfirst" className='showwlink'>NO</Link>
          </button>
    </div>
  );
}

export default OffShowFinalManagerApp;