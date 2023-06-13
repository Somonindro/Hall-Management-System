import './StuApplicationPage.css';
import { useState } from 'react';
import {Route, Path, Link} from 'react-router-dom';

function StuApplicationPage(){

    
    const setType=(r)=>{
        setT(r.target.value);
        setData({...data, 'type':r.target.value});
    } 
    

    const [data,setData]=useState({});
    const [t, setT]=useState("");
    
    const funcApply=()=>{ 
        fetch('http://localhost:2020/oracle-con/reg-std-stuapplication',{
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
    

        <div class="application">

            <form className='applicationform'>
            <h3>Student ID</h3>
            <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'roll':eve.target.value})}/>
            

            <br></br>


            
            <select onChange={(eve)=>setType(eve)} class="inSelect" >
                <option>Select Your Application Type:</option>
                <option value="room">Apply For New Room</option>
                <option value="manager">Apply For Mess manager</option>
                  
            </select>
            
            {
                t=="room" &&
                <div>
                    {/* <h3>Current Room Number :</h3> 
                    <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'currentroom':eve.target.value})}/> */}
                    <br></br>
                    <h3>New Room Number :</h3>
                    <input type="text" class="applicationtext" onChange={(eve)=>setData({...data,'newroom':eve.target.value})}/>
                    
                </div>
                  
            }


            {
                t=="manager" &&
                <div>
                    <h3>Select Mess Month:</h3>
                    <select onChange={(eve)=>setData({...data,'month':eve.target.value})} class="inSelect" >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
            }

            <Link to="/stufirst" className='applink' >
                <button class="applicationsub" onClick={funcApply}>
                Apply
                </button>
            </Link>

            <Link to="/stushowapplication" className='applink' >
                <button class="applicationsub">
                Previous Application For Mess Manager
                </button>
            </Link>
            <Link to="/stushowroomapplication" className='applink' >
                <button class="applicationsub">
                Previous Application For Room
                </button>
            </Link>


            </form>


        </div>
  );
}

export default StuApplicationPage;