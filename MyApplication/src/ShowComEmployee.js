
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

// setData({...data,'mail':eve.target.value})
function ShowComEmployee (){
    const [data, setData] = useState([]);
    const location = useLocation();
    const {from} = location.state;
    const [des, setdes] = useState({'des':from[3]});

    // let from2=[...from];


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        console.log("enterrr");
        async function fetchData() {
          fetch("http://localhost:2020/oracle-con/reg-std-employee",{
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

      
    const funcAppoint=()=>{ 
      



      fetch('http://localhost:2020/oracle-con/reg-std-appointnow',{
      method:'post',
      body: JSON.stringify(des),
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


  return (
    <div className="">
      <h1>Complain</h1>
      <h3>Mail ID   : {from[0]}</h3>
      <h3>Student ID  : {from[1]}</h3>
      <h3>ROOM NO      : {from[2]}</h3>
      <h3>DESCRIPTION : {from[3]}</h3>
      <h3>State: {from[4]}</h3>
      <h3>Hall Name      : {from[5]}</h3>


      <table className='table-app'>
            <tbody>
            <tr>
                <th className='th-app'>NAME</th>
                <th className='th-app'>MAIL ID</th>
                <th className='th-app'>DUTY</th>
                
            </tr>
            {data.rows.map(animal => (
            <tr>{animal.map(x =>( 
            <td className='td-app'>{x}</td>
            )
            )}<td><Link to="/finalappoint" state={{from:animal}}><button className='app-button' onClick={funcAppoint}>Appoint</button></Link></td>
            </tr>


            
            ))}
            
            </tbody>
        </table> 
      
    </div>
  );
}

export default ShowComEmployee;