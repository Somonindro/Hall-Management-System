import React from 'react';
import { useLocation } from 'react-router-dom';

const ChildComponent =()=>{
    const location = useLocation();
    const {from} = location.state;
    console.log(from);
    return(
        <div>
            <h3>Child page</h3>
            <h4>{from[0]}</h4>


        </div>
          
    );
}
export default ChildComponent;