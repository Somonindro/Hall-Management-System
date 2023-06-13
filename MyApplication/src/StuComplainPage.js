import './StuComplainPage.css';
import { useState } from 'react';
import {Route, Path, Link} from 'react-router-dom';

function StuComplainPage(){


    const [data,setData]=useState({});
    
    
    const funcSubmitCom=()=>{ 
        fetch('http://localhost:2020/oracle-con/reg-std-stucomplain',{
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
    
        <div class="stucomplain">
            
            <form className='complainform'>
            
                <h4>Student ID</h4>
                <input type="text" class="complaintext" onChange={(eve)=>setData({...data,'roll':eve.target.value})}/>
                

                <h4>Room No</h4>
                <input type="text" class="complaintext" onChange={(eve)=>setData({...data,'room':eve.target.value})}/>

                
                <h4>Description</h4>
                <input type="text" class="destext" onChange={(eve)=>setData({...data,'des':eve.target.value})}/>

                <Link to="/stufirst" className='clink' >
                        <button class="complainsub" onClick={funcSubmitCom}>
                        Submit
                        </button>
                    </Link>
                <Link to="/stushowcomplain" className='clink' >
                    <button class="complainsub">
                    Previous Complains
                    </button>
                </Link>
            </form>
            

        </div>
  );
}

export default StuComplainPage;