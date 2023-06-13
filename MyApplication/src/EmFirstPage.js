import './OfficialFirstPage.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

	
function EmFirstPage(){

	const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

	
	useEffect(() => {
		async function fetchData() {
		  fetch("http://localhost:2020/oracle-con/reg-std-emfirstpage",{
		  method:'post',
		  body: JSON.stringify(data),
		  headers:{
			'Content-type':'application/json'
		  }
		})
			.then((response) => {
			  return response.json();
			})
			.then((data) => {
			  setData(data);
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
					<Link to="/employee" className="nav-link" >
						Employees List
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/getappoint" className="nav-link" >
						Appointment
					</Link>
				</li>
				{/* <li className="nav-item">
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
				</li> */}
				<li className="nav-item">
					<Link to="/studining" className="nav-link" >
						Dining
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" >
						Log out
					</Link>
				</li>
			</ul>
		</nav>
		<div className='divClasss'>
		<br>
		</br>
		<br>
		</br>
        <h1>Employee Home Page </h1>
		<br>
		</br>

		<h3>NAME  : {data.rows[0][0]}</h3>
		<h3>MAIL  : {data.rows[0][1]}</h3>
		<h3>HALL  : {data.rows[0][2]}</h3>
		<h3>DUTY  : {data.rows[0][3]}</h3>
        <h3>HIRE DATE  : {data.rows[0][4]}</h3>
		<h3>SALARY  : {data.rows[0][5]}</h3>
		</div>
		
        </div>
	);
};

export default EmFirstPage;