import './ManagerSection.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

	
function ManagerSection(){

    const [data,setData]=useState({});
    const [data1, setData1] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    const funcSetMenu=()=>{ 
        fetch('http://localhost:2020/oracle-con/reg-std-managersetmenu',{
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

	useEffect(() => {
		async function fetchData() {
		  fetch("http://localhost:2020/oracle-con/reg-std-managersection",{
		  method:'post',
		  body: JSON.stringify(data1),
		  headers:{
			'Content-type':'application/json'
		  }
		})
			.then((response) => {
			  return response.json();
			})
			.then((data1) => {
			  setData1(data1);
			  setIsLoaded(true);
			})
			.catch((error) => {
			  setError(error);
			  setIsLoaded(true);
			});
		}
		fetchData();
	
	  }, []);

	  if (error) return <div>Error: {error.message}</div>;
  	  if (!isLoaded) return <div>...loading</div>;




	return (


        <div class="manager">
        <form className='managerform'>
            {
                data1.rows[0][0]=="0" &&
                <div className='nomanager'>
                    <h3>You are not a mess manager . </h3>
                    <h3>Only mess manager on this month can access this page.</h3>
                </div>
            }

            {
                data1.rows[0][0]=="1" &&
                <div>
                    <h1>You are mess manager of this month. </h1>
                    <br>
                    </br>
                    <h3>Select menu for today : </h3>
                    <h3>LUNCH :</h3>
                    <input type="text" class="managertext" onChange={(eve)=>setData({...data,'lunch':eve.target.value})}/>
                    <br>
                    </br>
                    <h3>DINNER :</h3>
                    <input type="text" class="managertext" onChange={(eve)=>setData({...data,'dinner':eve.target.value})}/>
                    <br>
                    </br>

                    <Link to="/stufirst" className='manlink'>
                        <button class="managersub" onClick={funcSetMenu}>
                        SET MENU
                        </button>
                    </Link>

                    
                </div>
            }
        </form>
		
		
		</div>

	);
};

export default ManagerSection;