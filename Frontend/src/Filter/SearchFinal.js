
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function SearchFinal(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-searchfinal",{
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
                <th className='th-app'>NAME</th>
                <th className='th-app'>Student ID</th>
                <th className='th-app'>LEVEL</th>
                <th className='th-app'>TERM</th>
                <th className='th-app'>BLOOD GROUP</th>
                <th className='th-app'>ROOM NO</th>
                <th className='th-app'>COUPON NO</th>
            </tr>
            {data.rows.map(animal => (
            <tr>{animal.map(x =>( 
            <td className='td-app'>{x}</td>
            )
            )}
            </tr>

            
            ))}
            
            </tbody>
        </table>

        </div>
  );
}

export default SearchFinal;