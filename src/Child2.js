import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer.js'

const Child2 = () => {
    let [state,dispatch] = useReducer(CounterReducer, 0);
    return(
        <div>
            <h2>Context Reducer</h2>
            <h4>Context Reducer Value is : {state}</h4>
            <button onClick={()=>{dispatch("increament")}}>
                Increament Reducer

            </button>
            <button onClick={()=>{dispatch("decreament")}}>
                Increament Reducer

            </button>

        </div>
    ) 
}
export default Child2;
