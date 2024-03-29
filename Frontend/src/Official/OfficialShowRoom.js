import '../Styles/OfficialShowRoom.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function OfficialShowRoom(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-officialshowroom",{
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
    
        

    <div class="offshowroom">
    
    <h3>ROOM LIST</h3>
  
        <div>
        
        
        <br>
        </br>
        <table className='table-app'>
            <tbody>
            <tr>
                <th className='th-app'>ROOM NO</th>
                <th className='th-app'>FLOOR</th>
                <th className='th-app'>CAPACITY</th>
                <th className='th-app'>TOTAL STUDENT</th>
                <th className='th-app'></th>
            </tr>
            {data.rows.map(animal => (
            <tr>{animal.map(x =>( 
            <td className='td-app'>{x}</td>
            )
            )}<td><Link to="/offroomdetails" state={{from:animal}}><button className='app-button'>Show</button></Link></td>
            </tr>
            
            ))}
            
            </tbody>
        </table> 

        </div>

        </div>
  );
}

export default OfficialShowRoom;