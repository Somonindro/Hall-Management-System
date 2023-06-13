import './LoginPage.css';
import { useState } from 'react';
import {Route, Path, Link} from 'react-router-dom';

function LoginPage(){

    // const set=(r)=>{
    //     setMail(r.target.value);
    //     setData({...data, 'mail':r.target.value});
    // }
    
    const setType=(r)=>{
        setT(r.target.value);
    } 
    

    const [data,setData]=useState({});
    // const [nextmail, setMail]=useState("");
    const [t, setT]=useState("");
    
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
    

        <div class="login">
        <h2 class="active"> sign in </h2>

        <h2><Link to="/signup" className='alink'> sign up</Link></h2>
        <form className='loginform'>

            <input type="text" class="text" onChange={(eve)=>setData({...data,'mail':eve.target.value})}/>
            <span>mail id</span>

            <br></br>

            <input type="password" class="text" onChange={(eve)=>setData({...data,'pass':eve.target.value})}/>
            <span>password</span>

            <br></br>
            
            <select onChange={(eve)=>setType(eve)} class="inSelect" >
                <option>Select Your Type</option>
                <option value="Student">Student</option>
                <option value="Official">Official</option>
                <option value="Employee">Employee</option>    
            </select>
            
            {
                t=="" &&
                <button class="signin" >
                    Sign In
                    </button>
            }


            {
                t=="Student" &&
                <Link to="/stufirst" className='alink' >
                    <button class="signin" onClick={funcSubmit}>
                    Sign In
                    </button>
                </Link>
            }

            {
                t=="Employee" &&
                <Link to="/emfirstpage" className='alink' >
                    <button class="signin" onClick={funcSubmit}>
                    Sign In
                    </button>
                </Link>
            }

            {
                t=="Official" &&
                <Link to="/officialfirst" className='alink' >
                    <button class="signin" onClick={funcSubmit}>
                    Sign In
                    </button>
                </Link>
            }

            
            {/* <a className='a-login'>Forgot Password?</a> */}
        </form>

        </div>
  );
}

export default LoginPage;