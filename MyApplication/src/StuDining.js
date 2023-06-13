import './StuDining.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function StuDining(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-studining",{
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
    

        <div className="studiningdiv">
        

        {
            data.rows[0]==null &&
                <h1>Today's Menu has not been selected yet.</h1>
                
        }
        {
            data.rows[0]!=null &&
            <div>
                <h1>Mess Manager Information :</h1>
        
                <h3>Name   : {data.rows[0][0]}</h3>
                <h3>Mail ID   : {data.rows[0][1]}</h3>
                <h3>Student ID   : {data.rows[0][2]}</h3>
                <h3>Mess Month  : {data.rows[0][3]}</h3>
                <br>
                </br>
                
                <h1>Today's Menu :</h1>
                <h3>Date   : {data.rows[0][4]}</h3>
                <h3>Lunch   : {data.rows[0][5]}</h3>
                <h3>Dinner  : {data.rows[0][6]}</h3>
            </div>
        }
        

        <Link to="/dininghistory" className='manlink'>
            <button class="historysub" >
            HISTORY
            </button>
        </Link>
        </div>
  );
}

export default StuDining;