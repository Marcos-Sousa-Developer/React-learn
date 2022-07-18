import React, { useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    //prevent unacessary renders
    const incrementAge =  useCallback(()=> { /// will return a memoized version of the callback function, and changes if dependecy changes
        setAge(age + 1)
    }, [age]) 

    const incrementSalary = useCallback(() => { // will return a memoized version of the callback function, and changes if dependecy changes
        setSalary(salary + 1000)
    },[salary])

  return (
    <div>
        <Title></Title>
        <Count text='Age' count={age}></Count>
        <Button handleClick={incrementAge}>IncrementAge</Button>
        <Count text="Salary" count={salary}></Count>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent