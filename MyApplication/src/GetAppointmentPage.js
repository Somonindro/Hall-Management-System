//this will be shown to employee
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function GetAppointmentPage(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-getappoint",{
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
    

        <div class="container">
        
        <table className='table-app'>
            <tbody>
            <tr>
                <th className='th-app'>O MAIL ID</th>
                <th className='th-app'>E MAIL ID</th>
                <th className='th-app'>DESCRIPTION</th>
                <th className='th-app'>S MAIL ID</th>
                <th className='th-app'>ROOM</th>
                <th className='th-app'>HALL NAME</th>
            </tr>
            {data.rows.map(animal => (
            <tr>{animal.map(x =>( 
            <td className='td-app'>{x}</td>
            )
            )}<td><Link to="/finalgetappoint" state={{from:animal}}><button className='app-button'>Show</button></Link></td>
            </tr>
            
            ))}
            
            </tbody>
        </table> 

        </div>
  );
}

export default GetAppointmentPage;