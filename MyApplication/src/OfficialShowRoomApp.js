//this is room application
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function OfficialShowRoomApp(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-officialshowroomapp",{
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
        <h3>Applications For Room :</h3>
        <table className='table-app'>
            <tbody>
            <tr>
                <th className='th-app'>MAIL ID</th>
                <th className='th-app'>Student ID</th>
                {/* <th className='th-app'>CURRENT ROOM</th> */}
                <th className='th-app'>NEW ROOM</th>
                <th className='th-app'>STATUS</th>
                <th className='th-app'>DATE AND TIME</th>
            </tr>
            {data.rows.map(animal => (
            <tr>{animal.map(x =>( 
            <td className='td-app'>{x}</td>
            )
            )}<td><Link to="/offshowfinalroomapp" state={{from:animal}}><button className='app-button'>Show</button></Link></td>
            </tr>

            
            ))}
            
            </tbody>
        </table> 

        </div>
  );
}

export default OfficialShowRoomApp;