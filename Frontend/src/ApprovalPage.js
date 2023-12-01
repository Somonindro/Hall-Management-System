import './ApprovalPage.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function ApprovalPage(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-approve",{
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
                <th className='th-app'>MAIL ID</th>
                <th className='th-app'>PASSWORD</th>
                <th className='th-app'>TYPE</th>
                <th className='th-app'>HALL NAME</th>
                <th className='th-app'>STUDENT ID</th>
                <th className='th-app'>NAME</th>
            </tr>
            {data.rows.map(animal => (
            <tr>{animal.map(x =>( 
            <td className='td-app'>{x}</td>
            )
            )}<td><Link to="/finalapproval" state={{from:animal}}><button className='app-button'>Approve</button></Link></td>
            </tr>
            // () => console.log(animal[0])
            
            ))}
            
            </tbody>
        </table> 

        </div>
  );
}

export default ApprovalPage;