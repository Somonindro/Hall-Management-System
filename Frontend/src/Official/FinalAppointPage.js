import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function FinalAppointPage (){
    const location = useLocation();
    const {from} = location.state;
    const [mail, setMail] = useState({'mail':from[1]});


    const funcFinalAppoint=()=>{ 
      setMail({...mail, 'mail':from[1]});
      fetch('http://localhost:2020/oracle-con/reg-std-appointfinal',{
      method:'post',
      body: JSON.stringify(mail),
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
    <div className="finalapprovepage">
      <h1>Final Appoint</h1>
      <h3>NAME  : {from[0]}</h3>
      <h3>Mail ID   : {from[1]}</h3>
      <h3>Duty  : {from[2]}</h3>
      
      <button onClick={funcFinalAppoint}>
      <Link to="/officialfirst">Appoint Now</Link>
          </button>
    </div>
  );
}

export default FinalAppointPage;