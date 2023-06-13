import './OffRoomDetails.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

function OffRoomDetails (){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const location = useLocation();
    const {from} = location.state;
    const [room, setRoom] = useState({'room':from[0]});

    useEffect(()=>{
        async function dataSend(){

        setRoom({...room, 'room':from[0]});
        fetch("http://localhost:2020/oracle-con/reg-std-setroomno",{
            method:'post',
            body: JSON.stringify(room),
            headers:{
                'Content-type':'application/json'
        }
        }).then((res)=>{

            return res.json();
        }).then((result)=>{
            console.log(result);
        })
        
        }
        dataSend();
    }, []);// sesh a [] mane function ek bar call kora


    useEffect(() => {
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-offroomdetails",{
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
      <div class="details">
        <h1>ROOM DETAILS</h1>
        
        <h3>ROOM NO   : {from[0]}</h3>
        <h3>FLOOR  : {from[1]}</h3>
        <h3>CAPACITY      : {from[2]}</h3>
        <h3>TOTAL STUDENTS : {from[3]}</h3>
        <br>
        </br>
      </div>


      <div class="container">
        
        <table className='table-app'>
            <tbody>
            <tr>
                <th className='th-app'>NAME</th>
                <th className='th-app'>MAIL ID</th>
                <th className='th-app'>COUPON NO</th>
                <th className='th-app'>STUDENT ID</th>
                <th className='th-app'>LEVEL</th>
                <th className='th-app'>TERM</th>
                <th className='th-app'>BLOOD GROUP</th>
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
      
    </div>
  );
}

export default OffRoomDetails;