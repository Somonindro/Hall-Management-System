import React from 'react'
import {Route, Path, Link} from 'react-router-dom';


const ParentComponent =()=> {
  let data =['1234', '5678'] ;
  let x = ((Math.random()*1000)/2)%2;
  

  return(
    <div>
        

         <button >
            <Link to ='/child' state={{from:data}}>Create</Link>
          </button>
          {
            x > 0 &&
            <h1>{x}</h1>
          }
          {
            x != 0 &&
            <h2>else returned.</h2>
          }
            
    </div>
    
    
      );
}

export default ParentComponent;