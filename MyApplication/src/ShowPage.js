import './ShowPage.css';
import React, { useState, useEffect } from "react";
import {Route, Path, Link, useLocation} from 'react-router-dom';

const randomUserURL = "http://localhost:2020/oracle-con/reg-std-entry";

const App = () => {
  const [data, setData] = useState([]);
  const [data1,setData1]=useState({});//for sending data
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const {from} = location.state;


  const funcSearch=()=>{ 
    fetch('http://localhost:2020/oracle-con/reg-std-search',{
    method:'post',
    body: JSON.stringify(data1),
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
  

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:2020/oracle-con/reg-std-entry",{
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
    <div className="showpage">
      
     <h3>STUDENTS (ORDER BY {from})</h3>
      <div className='searchdiv'>
          <select onChange={(eve)=>setData1({...data1,'searchby':eve.target.value})}  >
                    <option>Search by</option>
                    <option value="P.NAME">Name</option>
                    <option value="STUDENT_ID">Student ID</option>
                    <option value="ROOM_NO">Room</option>
                    <option value="BLOOD_GROUP">Blood Group</option>    
          </select>
          <input type="text" class="showtext" onChange={(eve)=>setData1({...data1,'searchdata':eve.target.value})}/>
          
          <Link to="/searchfinal">
              <button onClick={funcSearch}>
              Search
              </button>
          </Link>
     </div>

      <div>
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
    </div>
  );
};
export default App;