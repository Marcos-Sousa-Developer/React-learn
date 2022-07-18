import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {

    switch(action.type) {

        case 'increment':
            return { ... state, firstCounter: state.firstCounter + action.value}
        
        case 'decrement':
            return {... state, firstCounter: state.firstCounter - action.value}
        
        case 'reset':
            return initialState
        
        default:
            return state
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
        <div>First Counter - {count.firstCounter}</div>
        <div>Second Counter - {count.secondCounter} </div>
        <br></br>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>increment 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>decrement 5</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        <br></br>
        <button onClick={() => dispatchTwo({type: 'increment', value: 1})}>increment Counter 2</button>
        <button onClick={() => dispatchTwo({type: 'decrement', value: 1})}>decrement Counter 2</button>
    </div>
  )
}

export default CounterThree