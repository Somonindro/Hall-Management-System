import './OffShowFinalRoomApp.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function OffShowFinalRoomApp (){
    const location = useLocation();
    const {from} = location.state;
    const [data,setData]=useState({'mail':from[0] , 'room':from[2]});


    const funcApprove=()=>{ 
      
      fetch('http://localhost:2020/oracle-con/reg-std-offshowfinalroomappyes',{
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
      
        fetch('http://localhost:2020/oracle-con/reg-std-offshowfinalroomappno',{
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
      <h1>Room Changing Application </h1>
      <h3>MAIL ID   : {from[0]}</h3>
      <h3>STUDENT ID   : {from[1]}</h3>
      <h3>NEW ROOM  : {from[2]}</h3>
      <h3>STATUS      : {from[3]}</h3>
      <h3>DATE AND TIME : {from[4]}</h3>
      

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

export default OffShowFinalRoomApp;