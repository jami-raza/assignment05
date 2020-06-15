import React, { useContext } from 'react';
import CounterContext from './CounterContext.js'
const Child = () =>{
    let countervalue = useContext(CounterContext);
    return(
        <div className='box'>
            <h2>Counter Context </h2>
            <h4>Counter Context value is : {countervalue[0]}</h4>

            <button onClick={()=>{countervalue[1](++countervalue[0])}}>
                Increament Context

            </button>
            <button onClick={()=>{countervalue[1](--countervalue[0])}}>
                Decreament Context

            </button>

        </div>
    );

} 
export default Child;