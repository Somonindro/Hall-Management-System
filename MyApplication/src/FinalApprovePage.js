import './FinalApprovePage.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function FinalApprovePage (){
    const location = useLocation();
    const {from} = location.state;
    const [data,setData]=useState({'mail':from[0]});


    const funcApprove=()=>{ 
      
      setData({...data,'mail':from[0]});
      if (from[2]=="Student")
      {
        setData({...data,'duty':""});
        setData({...data,'salary':""});
      }
      if (from[2]=="Employee")
      {
        setData({...data,'room':""});
        setData({...data,'coupon':""});
      }

      console.log(data);

      fetch('http://localhost:2020/oracle-con/reg-std-approvenow',{
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
    <div className="finalapprovepage">
      <h1>Approve</h1>
      <h3>Mail ID   : {from[0]}</h3>
      <h3>Password  : {from[1]}</h3>
      <h3>Type      : {from[2]}</h3>
      <h3>Hall Name : {from[3]}</h3>
      <h3>Student ID: {from[4]}</h3>
      <h3>Name      : {from[5]}</h3>

      {/* <h3>Confirm Mail ID:</h3>
      <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'mail':eve.target.value})}/> */}

      {/* {setData({...data, 'mail':from[0]})} */}

      {
        from[2] == "Student" &&
        <div>
          <h3>Select Room No.:</h3>
          <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'room':eve.target.value})}/>

          <h3>Select Coupon No.:</h3>
          <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'coupon':eve.target.value})}/>

        </div>
      }

      {
        from[2] == "Employee" &&
        <div>
          <h3>Select Duty:</h3>
          <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'duty':eve.target.value})}/>

          <h3>Select Salary:</h3>
          <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'salary':eve.target.value})}/>

        </div>
      }

      <button onClick={funcApprove}>
      <Link to="/officialfirst" className='finalgetlink'>APPROVE</Link>
          </button>
    </div>
  );
}

export default FinalApprovePage;