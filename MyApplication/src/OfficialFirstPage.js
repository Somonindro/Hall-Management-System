import './OfficialFirstPage.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

	
function OfficialFirstPage(){

	const set=(r)=>{
        setT(r.target.value);
        setData({...data, 'orderby':r.target.value});
    }
    const [data,setData]=useState({});
    const [t, setT]=useState("");
    const funcOrder=()=>{ 
        fetch('http://localhost:2020/oracle-con/reg-std-stufirst',{
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


	const [data1, setData1] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		async function fetchData() {
		  fetch("http://localhost:2020/oracle-con/reg-std-ofirstpage",{
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
		<div>
            <nav className="navbar">
			
			
			<ul className="nav-links active">
				
				<li className="nav-item">
					<Link to="/approval" className="nav-link" >
						Approval List
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/showcomplain" className="nav-link" >
						Complains
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/officialshowapplication" className="nav-link" >
						Manager Applications
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/officialshowroomapp" className="nav-link" >
						Room Applications
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/officialshowroom" className="nav-link" >
						Rooms
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/officialshowvacantroom" className="nav-link" >
						Vacant Room
					</Link>
				</li>
			</ul>
		</nav>
		<div className='divClasss'>
		<br>
		</br>
		<br>
		</br>
        <h1>Official Home Page </h1>
		<br>
		</br>

		<h3>NAME  : {data1.rows[0][0]}</h3>
		<h3>MAIL  : {data1.rows[0][1]}</h3>
		<h3>HALL  : {data1.rows[0][2]}</h3>
		<h3>POST  : {data1.rows[0][3]}</h3>

		<Link to="/show" className='showstulink' state={{from:t}}>
                            <button class="showstu" onClick={funcOrder}>
                            Show Students
                            </button>
                        </Link>
                <select onChange={(eve)=>set(eve)} class="inSelect" >
                        <option>Order By</option>
                        <option value="BLOOD_GROUP">Blood Group</option>
                        <option value="STUDENT_ID">Student ID</option>
                        <option value="ROOM_NO">Room Number</option> 
                        <option value="LVL">Level</option>   
                    </select>
		<Link to="/studining" className='showstulink'>
				<button class="showstu" >
				Dining Info
				</button>
			</Link>
		<Link to="/" className='showstulink'>
			<button class="showstu" >
			Log out
			</button>
		</Link>
		</div>
		
        </div>
	);
};

export default OfficialFirstPage;