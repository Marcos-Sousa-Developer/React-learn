import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0)
    const[counterTwo, setConterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {

        setConterTwo(counterTwo + 1)
    }

    const isEven = useMemo( () => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 == 0
    }, [counterOne])
  return (
    <div>
        <button onClick={incrementOne}>Coun one</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <button onClick={incrementTwo}>Coun two</button>
    </div>
  )
}

export default Counter