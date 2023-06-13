import React from 'react';
import './SignupPage.css';
import { useState } from 'react';
import {Route, Path, Link} from 'react-router-dom';

function SignupPage (){
    const set=(r)=>{
       setStu(r.target.value);
       setData({...data, 'type':r.target.value});
       
    } 
    const [data,setData]=useState({});
    const [stu, setStu]=useState("");
    const funcCreate=()=>{
    fetch('http://localhost:2020/oracle-con/reg-std-signup',{
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
      console.log('Result submitted.');
    })
  }
  return (
    <div className="signuppage">
      <h2 class="up-h2"> sign up </h2>

      <form>

      <input type="text" class="textsignup" onChange={(eve)=>setData({...data,'name':eve.target.value})}/>
          <span>name</span>

          <br></br>

          <input type="text" class="textsignup"  onChange={(eve)=>setData({...data,'mail':eve.target.value})}/>
          <span>mail id</span>

          <br></br>

          <input type="password" class="textsignup"  onChange={(eve)=>setData({...data,'pass':eve.target.value})}/>
          <span>password</span>

          <br></br>



    <select onChange={(eve)=>setData({...data,'hall':eve.target.value})} class="mySelect" >
    <option>Select Your Hall</option>
	  <option value="TH">Titumir Hall</option>
    <option value="AUH">Ahsanullah Hall</option>
    <option value="SNSH">Sabekun Nahar Soni Hall</option>
    <option value="RH">Dr. M. A. Rashid Hall</option>
    <option value="NIH">Nazrul Islam Hall</option>
    <option value="SBH">Sher-e-Bangla Hall</option>
    <option value="SH">Suhrawardy Hall</option>
    </select>

        <select onChange={(eve)=>set(eve)} class="mySelect" >
    <option>Select Your Type</option>
	  <option value="Student">Student</option>
    <option value="Employee">Employee</option>    
    </select>


          {
            
            stu=="Student" &&
           <input type="text" class="textsignup"  onChange={(eve)=>setData({...data,'roll':eve.target.value})}/>
          }

          {
            
            stu=="Student" &&
            <span>Student ID</span>
            
          }
          
          
          <Link to="/login" className='up-link'>
          <button class="signup" onClick={funcCreate}>
          Sign Up
          </button>
          </Link>

      </form>

    </div>
  );
}

export default SignupPage;