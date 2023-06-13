import React, { useState, useEffect } from "react";
import {Route, Path, Link} from 'react-router-dom';


const randomUserURL = "http://localhost:2020/oracle-con/reg-std-official";

const OfficialPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      fetch(randomUserURL,{
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
        
        <h1>Officials List :</h1>
        <br>
        </br>
        <table className='table-app'>
            <tbody>
            <tr>
                <th className='th-app'>NAME</th>
                <th className='th-app'>MAIL ID</th>
                <th className='th-app'>POST</th>
                
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
};
export default OfficialPage;