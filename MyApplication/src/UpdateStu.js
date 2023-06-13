import './UpdateStu.css';
import { useState } from 'react';
import {Route, Path, Link} from 'react-router-dom';

function UpdateStu(){
    

    const [data,setData]=useState({});
    
    const funcUpdate=()=>{ 
        fetch('http://localhost:2020/oracle-con/reg-std-updatestu',{
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
    

        <div class="update">

            <form className='updateform'>
            <h3>Name</h3>
            <input type="text" class="updatetext" onChange={(eve)=>setData({...data,'name':eve.target.value})}/>
            <br></br>
            <h3>Student ID</h3>
            <input type="text" class="updatetext" onChange={(eve)=>setData({...data,'roll':eve.target.value})}/>
            <br></br>
            <h3>Level</h3>
            <input type="text" class="updatetext" onChange={(eve)=>setData({...data,'level':eve.target.value})}/>
            <br></br>
            <h3>Term</h3>
            <input type="text" class="updatetext" onChange={(eve)=>setData({...data,'term':eve.target.value})}/>
            <br></br>
            <h3>Blood Group</h3>
            <input type="text" class="updatetext" onChange={(eve)=>setData({...data,'blood':eve.target.value})}/>
            <br></br>



            <Link to="/stufirst" className='uplink' >
                <button class="updatesub" onClick={funcUpdate}>
                UPDATE
                </button>
            </Link>


            </form>


        </div>
  );
}

export default UpdateStu;