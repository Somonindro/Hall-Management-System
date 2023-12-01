import './StuFirstPage.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

	
function StuFirstPage(){

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
		  fetch("http://localhost:2020/oracle-con/reg-std-sfirstpage",{
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
		<div className='divouter'>
            <nav className="navbar">
			
			
			<ul className="nav-links active">
				
				<li className="nav-item">
					<Link to="/official" className="nav-link" >
						Official List
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/employee" className="nav-link" >
						Employees List
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/stucomplain" className="nav-link" >
						Complains
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/stuapplication" className="nav-link" >
						Applications
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/officialshowroom" className="nav-link" >
						Rooms
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/officialshowvacantroom" className="nav-link" >
						Vacant Rooms
					</Link>
				</li>
			</ul>
		</nav>

        <div className='stufirstdiv'>
		

        <h1>Student Home Page </h1>
		<br>
		</br>

        {
            data1.rows[0]==null &&
            <div>
                <h3>Your request is under processing. </h3>
                <h3>An official will approve you soon.</h3>
            </div>
        }

        {
            data1.rows[0]!=null &&
            <div>
                <h3>NAME  : {data1.rows[0][0]}</h3>
                <h3>MAIL  : {data1.rows[0][1]}</h3>
                <h3>HALL  : {data1.rows[0][2]}</h3>
                <h3>ROLL  : {data1.rows[0][3]}</h3>
                <h3>LEVEL  : {data1.rows[0][4]}</h3>
                <h3>TERM  : {data1.rows[0][5]}</h3>
                <h3>BLOOD  : {data1.rows[0][6]}</h3>
                <h3>ROOM  : {data1.rows[0][7]}</h3>
                <h3>COUPON  : {data1.rows[0][8]}</h3>

                <Link to="/updatestu" className='showstulink'>
                            <button class="showstu" >
                            Update Info
                            </button>
                        </Link>

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
                <Link to="/managersection" className='showstulink'>
                    <button class="showstu" >
                    MESS MANAGER SECTION
                    </button>
                </Link>
                <Link to="/" className='showstulink'>
                    <button class="showstu" >
                    Log out
                    </button>
                </Link>
            </div>
        }

		
		</div>

        
        </div>
	);
};

export default StuFirstPage;