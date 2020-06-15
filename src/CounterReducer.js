const CounterReducer = (state,action) =>{
    switch(action){
        case  "increament" :
        return state + 1
        case "decreament" :
            return state - 1
    }
}
export default CounterReducer;